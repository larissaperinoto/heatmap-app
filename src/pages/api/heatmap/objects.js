import { readFile } from "@/pages/utils/readFile";
import { httpStatus } from "@/pages/utils/statusHttp";

export default async function handler(_req, res) {
  try {
    const response = readFile();

    const data = response.reduce((acc, dado) => {
      dado["fields"]["deepstream-msg"].forEach((item) => {
        const object = item.split("|")[5];

        if (!acc.includes(object)) {
          acc.push(object);
        }
      });

      return acc;
    }, []);

    res.status(httpStatus.OK).json(data);
  } catch (e) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json([]);
  }
}
