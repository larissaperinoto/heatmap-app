import { httpStatus } from "@/pages/utils/statusHttp";
import { calculateCentroidBoundingBox } from "@/pages/utils/boundingBox";
import { readFile } from "@/pages/utils/readFile";

export default async function handler(_req, res) {
  try {
    const response = readFile();

    const data = response.reduce((acc, dado) => {
      const formated = dado["fields"]["deepstream-msg"].map((item) => {
        const [id, minX, minY, maxX, maxY, object, region] = item.split("|");
        const { x, y } = calculateCentroidBoundingBox(
          +minX,
          +maxX,
          +minY,
          +maxY
        );

        return { x, y, id, object, region, value: 1 };
      });

      acc.push(...formated);
      return acc;
    }, []);

    res.status(httpStatus.OK).json(data);
  } catch (e) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json([]);
  }
}
