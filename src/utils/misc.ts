import lodash from "lodash";

function isFetchError(error: any) {
  return (
    !!error && lodash.hasIn(error, "status") && lodash.isFunction(error.json)
  );
}

async function getFetchError(error: any) {
  try {
    return await error.json();
  } catch (e) {
    return null;
  }
}

export default class Misc {
  static trimObjectProperties = (obj: any, properties: string[]): any => {
    const data = lodash.cloneDeep(obj);

    if (lodash.isArray(properties)) {
      properties.forEach((property) => {
        data[property] = data[property]?.trim();
      });
    } else {
      lodash.keys(obj).forEach((key) => {
        data[key] = data[key]?.trim();
      });
    }

    return data;
  };

  static getErrorJsonBody = async (error: any): Promise<any> => {
    if (isFetchError(error)) {
      error = await getFetchError(error);
    }

    return error;
  };

  static insert = (array: any[], index: number, value: any): any[] =>
    array
      .slice(0, index)
      .concat(value)
      .concat(array.slice(index, array.length));

  static isJson = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
