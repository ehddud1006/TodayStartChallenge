type dataTypes = {
  Date: string;
  User: string;
  Message: string;
};

type sectionTypes = { [key: string]: dataTypes[] };
const makeSection = (data: dataTypes[]) => {
  const section: sectionTypes = {};

  data.forEach(item => {
    const monthDate = item.Date.slice(0, 10);

    if (Array.isArray(section[monthDate])) {
      section[monthDate].push(item);
    } else {
      section[monthDate] = [item];
    }
  });

  return section;
};

export default makeSection;
