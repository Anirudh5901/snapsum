export function formatFileNameAsTitle(fileName: string): string {
  //remove file extension and replace special characters with space
  const withoutExtension = fileName.replace(/\.[^/.]+$/, "");
  const withSpaces = withoutExtension
    .replace(/[-_]+/g, " ") //replace dashes and underscores with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2"); //Add space between camelCase

  //convert to title case (capitalize)
  return withSpaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();
}
