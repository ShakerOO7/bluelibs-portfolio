export default {
  resolvers: {
    WorkExperience: {},
    WorkExperienceJobType: {
      FULL_TIME: "Full Time",
      PART_TIME: "Part Time",
      CONTRACT: "Contract",
      INTERNSHIP: "Internship",
    },
    WorkExperienceWorkLocation: {
      REMOTE: "Remote",
      ON_SITE: "On Site",
      HYBRID: "Hybrid",
    },
  },
};
