import React from "react";

const CreatedExperienceAd = ({ experience }) => {
  return (
    <>
      {experience.isPublished == false ? (
        <tr>
          <th scope="row">{experience._id}</th>
          <td>{experience.title} </td>
          <td>{experience.type.title}</td>
          <td>{experience.activity}</td>
        </tr>
      ) : (
        <> </>
      )}
    </>
  );
};

export default CreatedExperienceAd;
