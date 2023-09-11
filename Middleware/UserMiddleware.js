const validate = (req, res, next) => {
  try {
    // const age = req.query.age;
    const age = req.params.age;
    console.log(age);
    if (req.params.age >= 18) {
      next();
    } else {
      res.send({ msg: "user not not allowed" });
    }
  } catch (err) {
    console.log(`Error in Code ${err}`);
  }
};


const ApplicationLevel = (res, req, next) => {
  console.log("Application is Runing");
  next();
};

module.exports = { validate, ApplicationLevel };
