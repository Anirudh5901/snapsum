export const parseSection = (
  section: string
): { title: string; points: string[] } => {
  const [title, ...content] = section.split("\n"); //splits the section by new lines. The first line becomes the title, the rest becomes the content.
  const cleanTitle = title.startsWith("#")
    ? title.substring(1).trim()
    : title.trim(); //removes # from the title if present and trims whitespace
  const points: string[] = [];
  let currentPoint = "";
  content.forEach((line) => {
    //parses through each line in the content.
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith(".")) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmedLine;
    } else if (!trimmedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = "";
    } else {
      currentPoint += " " + trimmedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim()); //adds and remaining points
  return {
    title: cleanTitle,
    points: points.filter(
      (point) => point && !point.startsWith("#") && !point.startsWith("[Choose")
    ),
  };
};
