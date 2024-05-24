import { exec } from "node:child_process";

export const properties = {
  from: {
    image: [
      "3fr",
      "8bim",
      "8bimtext",
      "8bimwtext",
      "app1",
      "app1jpeg",
      "art",
      "arw",
      "avs",
      "b",
      "bie",
      "bigtiff",
      "bmp",
      "c",
      "cals",
      "caption",
      "cin",
      "cmyk",
      "cmyka",
      "cr2",
      "crw",
      "cur",
      "cut",
      "dcm",
      "dcr",
      "dcx",
      "dng",
      "dpx",
      "epdf",
      "epi",
      "eps",
      "epsf",
      "epsi",
      "ept",
      "ept2",
      "ept3",
      "erf",
      "exif",
      "fax",
      "file",
      "fits",
      "fractal",
      "ftp",
      "g",
      "gif",
      "gif87",
      "gradient",
      "gray",
      "graya",
      "heic",
      "heif",
      "hrz",
      "http",
      "icb",
      "icc",
      "icm",
      "ico",
      "icon",
      "identity",
      "image",
      "iptc",
      "iptctext",
      "iptcwtext",
      "jbg",
      "jbig",
      "jng",
      "jnx",
      "jpeg",
      "jpg",
      "k",
      "k25",
      "kdc",
      "label",
      "m",
      "mac",
      "map",
      "mat",
      "mef",
      "miff",
      "mng",
      "mono",
      "mpc",
      "mrw",
      "msl",
      "mtv",
      "mvg",
      "nef",
      "null",
      "o",
      "orf",
      "otb",
      "p7",
      "pal",
      "palm",
      "pam",
      "pbm",
      "pcd",
      "pcds",
      "pct",
      "pcx",
      "pdb",
      "pdf",
      "pef",
      "pfa",
      "pfb",
      "pgm",
      "picon",
      "pict",
      "pix",
      "plasma",
      "png",
      "png00",
      "png24",
      "png32",
      "png48",
      "png64",
      "png8",
      "pnm",
      "ppm",
      "ps",
      "ptif",
      "pwp",
      "r",
      "raf",
      "ras",
      "rgb",
      "rgba",
      "rla",
      "rle",
      "sct",
      "sfw",
      "sgi",
      "sr2",
      "srf",
      "stegano",
      "sun",
      "svg",
      "svgz",
      "text",
      "tga",
      "tiff",
      "tile",
      "tim",
      "topol",
      "ttf",
      "txt",
      "uyvy",
      "vda",
      "vicar",
      "vid",
      "viff",
      "vst",
      "wbmp",
      "webp",
      "wmf",
      "wpg",
      "x3f",
      "xbm",
      "xc",
      "xcf",
      "xmp",
      "xpm",
      "xv",
      "xwd",
      "y",
      "yuv",
    ],
  },
  to: {
    image: [
      "8bim",
      "8bimtext",
      "8bimwtext",
      "app1",
      "app1jpeg",
      "art",
      "avs",
      "b",
      "bie",
      "bigtiff",
      "bmp",
      "bmp2",
      "bmp3",
      "brf",
      "c",
      "cals",
      "cin",
      "cmyk",
      "cmyka",
      "dcx",
      "dpx",
      "epdf",
      "epi",
      "eps",
      "eps2",
      "eps3",
      "epsf",
      "epsi",
      "ept",
      "ept2",
      "ept3",
      "exif",
      "fax",
      "fits",
      "g",
      "gif",
      "gif87",
      "gray",
      "graya",
      "histogram",
      "html",
      "icb",
      "icc",
      "icm",
      "info",
      "iptc",
      "iptctext",
      "iptcwtext",
      "isobrl",
      "isobrl6",
      "jbg",
      "jbig",
      "jng",
      "jpeg",
      "jpg",
      "k",
      "m",
      "m2v",
      "map",
      "mat",
      "matte",
      "miff",
      "mng",
      "mono",
      "mpc",
      "mpeg",
      "mpg",
      "msl",
      "mtv",
      "mvg",
      "null",
      "o",
      "otb",
      "p7",
      "pal",
      "pam",
      "pbm",
      "pcd",
      "pcds",
      "pcl",
      "pct",
      "pcx",
      "pdb",
      "pdf",
      "pgm",
      "picon",
      "pict",
      "png",
      "png00",
      "png24",
      "png32",
      "png48",
      "png64",
      "png8",
      "pnm",
      "ppm",
      "preview",
      "ps",
      "ps2",
      "ps3",
      "ptif",
      "r",
      "ras",
      "rgb",
      "rgba",
      "sgi",
      "shtml",
      "sun",
      "text",
      "tga",
      "tiff",
      "txt",
      "ubrl",
      "ubrl6",
      "uil",
      "uyvy",
      "vda",
      "vicar",
      "vid",
      "viff",
      "vst",
      "wbmp",
      "webp",
      "x",
      "xbm",
      "xmp",
      "xpm",
      "xv",
      "xwd",
      "y",
      "yuv",
    ],
  },
};

export function convert(
  filePath: string,
  fileType: string,
  convertTo: string,
  targetPath: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  options?: any,
) {
  return exec(
    `gm convert "${filePath}" "${targetPath}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      if (stdout) {
        console.log(`stdout: ${stdout}`);
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
    },
  );
}
