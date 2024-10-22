export const parserQueryParams = (
  queryParams: IterableIterator<[string, string]>
) => {
  const result: { [key: string]: string } = {};

  let isDone = false;

  while (!isDone) {
    const { value, done } = queryParams.next();

    console.log("run");
    if (!Boolean(value)) {
      continue;
    }
    result[value[0]] = value[1];

    console.log("done status : ", done);

    isDone = Boolean(done);
  }

  return result;
};

export const detectDevice = (userAgent: any) => {
  let os: { name: string; version: string } | null = null;
  let browser: { name: string; version: string } | null = null;
  let device: string | null = null;

  const osRegex =
    /(windows nt|mac os x|linux|ubuntu|iphone|ipad|android) ?([\d._]*)/i;
  const osMatch = userAgent.match(osRegex);

  if (osMatch) {
    const osName = osMatch[1];
    const osVersion = osMatch[2].replace(/_/g, ".");
    os = { name: osName, version: osVersion };
  }

  const browserRegex = /(chrome|firefox|safari|opera|edge|msie)\/([\d\.]+)/i;
  const match = userAgent.match(browserRegex);

  if (match) {
    const browserName = match[1];
    const browserVersion = match[2];

    browser = { name: browserName, version: browserVersion };
  }
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Mobile|Tablet/i;
  const isMobile = mobileRegex.test(userAgent);

  if (isMobile) {
    device = "mobile";
  } else {
    device = "desktop";
  }

  return { os, browser, device };
};

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const detectIp = (ipAddress: string) => {
  const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

  if (ipAddress && ipRegex.test(ipAddress)) {
    return ipAddress;
  } else {
    return null;
  }
};

export function encodeURIWidthSpecialCharacters(s: string): string {
  return encodeURIComponent(s)
    .replace(
      /[-_.!~*'()]/g,
      (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`
    )
    .replace(/%20/g, "+");
}

export function decodeURIWidthSpecialCharacters(s: string): string {
  return decodeURIComponent(s.replace(/\+/g, "%20"));
}

export const checkIsNumber = (value: string | undefined) => {
  return value &&
    !Number.isNaN(Number(value)) &&
    Number.isInteger(Number(value))
    ? Number(value)
    : undefined;
};

export function generateURLWithQueryParams(
  url: string,
  queryParamsObject: { [key: string]: string | undefined }
) {
  const keys = Object.keys(queryParamsObject);
  const query = keys.map((key) => `${key}=${queryParamsObject[key]}`).join("&");

  return `${url}?${query}`;
}

export const getCountPage = (lenngthIteam: number, numSplit: number) => {
  const x = lenngthIteam / numSplit;
  const y = Math.round(lenngthIteam / numSplit);

  return y - x < 0 ? y + 1 : y;
};

export const formatNumber = (n: number | string) => {
  return parseInt(n.toString()) > 9
    ? `${parseInt(n.toString())}`
    : `0${parseInt(n.toString())}`;
};

export const getDateTime = (a: string | null) => {
  if (!a) return "";
  const d = new Date(a);

  return `${formatNumber(d.getHours())}:${formatNumber(
    d.getMinutes()
  )} ${formatNumber(d.getDate())}/${formatNumber(
    d.getMonth() + 1
  )}/${formatNumber(d.getFullYear())}`;
};
