const dataObj = {
  firstname: ["Jillian", "Kez", "Michael", "Sarah"],
  surname: "Keenan",
  fileType: [
    {
      corrupted: [
        {
          filename: "UNKNOWN",
          filesize: 1,
          content: "SCRAMBLED",
          searchableKeywords: ["margaret", "not feeling well", "dinner"]
        },
        {
          filename: "UNKNOWN",
          filesize: 2,
          content: "SCRAMBLED",
          searchableKeywords: ["Lucas", "night time", "journal"]
        },
        {
          filename: "UNKNOW",
          filesize: 3,
          content: "SCRAMBLED",
          searchableKeywords: ["Jonny", "Diary", "late", "night"]
        }
      ]
    },
    {
      form: [
        {
          passwordProtected: false,
          filename: "margarets mystery",
          filesize: 1,
          content:
            "I've had a bit of an iffy stomach but I'm feeling a little better, must have been something I've eaten",
          searchableKeywords: ["margaret", "not feeling well", "dinner"]
        },
        {
          passwordProtected: false,
          filename: "Lucas Journal",
          filesize: 2,
          content:
            "Late on night judy got out of bed and I wasn't sure what she was doing but it was something",
          searchableKeywords: ["Lucas", "night time", "journal"]
        },
        {
          passwordProtected: true,
          filename: "Jonnys Diary",
          filesize: 3,
          content:
            "Late on night judy got out of bed and I wasn't sure what she was doing but it was something",
          searchableKeywords: ["Jonny", "Diary", "late", "night"]
        }
      ]
    }
  ]
};

const thisIsACheck = jsonObj => {
  // In JSON world this is how we target things within the object.
  console.log(jsonObj.firstname);

  //   const check = jsonObj.map(check => check.firstname)
  return;
};

const searchObjectByInput = (jsonObj, input) => {
  console.log(jsonObj.firstname.filter(firstName => firstName === input));
};

thisIsACheck(dataObj);

const search = () => {
input = document.getElementById("myInput").value;
document.getElementById("clickMe").onclick = searchObjectByInput(dataObj, input);
}

