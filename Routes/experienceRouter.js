const router = require('express').Router()
const experienceController = require('../controllers/experience.controller')



router.route('/experience')
    .get(experienceController.getExperiences)
    .post(experienceController.createExperience)

router.route('/experience/:id')
    .delete(experienceController.deleteExperience)
    .put(experienceController.updateExperience)
    .get(experienceController.getSingleExperience)

module.exports = router


