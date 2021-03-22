const Experiences = require("../models/Experience");
//Filter, sorting and paginating
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const experienceController = {
  getExperiences: async (req, res) => {
    try {
      //console.log(req.query)
      const features = new APIfeatures(Experiences.find(), req.query)
        .filtering()
        .sorting()
        .paginating();
      const experiences = await features.query;

      res.json({
        status: "success",
        experiencesCount: experiences.length,
        experiences: experiences,
      });

      //console.log(experiences)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createExperience: async (req, res) => {
    try {
      //admin and user can create, delete and update "experiences créées"
      const {
        type,
        category,
        title,
        activite,// the variable names are  always in english 
        heure_d,
        heure_f,
        langue,
        ville,
        themes,
        difficulte,
        programme,
        cibles,
        phobies,
        eqInclus,
        EqExclus,
        prix,
      } = req.body;
      const newExperience = new Experiences({
        type,
        category,
        title,
        activite,
        heure_d,
        heure_f,
        langue,
        ville,
        themes,
        difficulte,
        programme,
        cibles,
        phobies,
        eqInclus,
        EqExclus,
        prix,
      });
      //  const newExperience = new Experiences({ title: "test 3", activite: "activite 3" })
      console.log("title of experience : ", newExperience["title"]);
      console.log("L'object experience : ", newExperience);
      await newExperience.save();
      console.log("req.body : ", req.body);
      res.json({ msg: "expérience créée avec succes" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteExperience: async (req, res) => {
    try {
      await Experiences.findByIdAndDelete(req.params.id);
      res.json({ msg: "Expérience supprimée avec succès" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateExperience: async (req, res) => {
    try {
      const {
        type,
        category,
        title,
        activite,
        heure_d,
        heure_f,
        langue,
        ville,
        themes,
        difficulte,
        programme,
        cibles,
        phobies,
        eqInclus,
        EqExclus,
        prix,
      } = req.body;
      await Experiences.findByIdAndUpdate(
        { _id: req.params.id },
        {
          type,
          category,
          title,
          activite,
          heure_d,
          heure_f,
          langue,
          ville,
          themes,
          difficulte,
          programme,
          cibles,
          phobies,
          eqInclus,
          EqExclus,
          prix,
        }
      );
      res.json({ msg: "L'expérience a été modifié avec succès" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getSingleExperience: async (req, res) => {
    try {
      const experience = await Experiences.findById(req.params.id);
      if (!experience)
        return res.status(404).json({ msg: "experience non trouvée" });
      res.json(experience);
      console.log(experiences);
    } catch (err) {
      return res.status(500).json({ msg: "experience non trouvée" });
    }
  },
};
module.exports = experienceController;
