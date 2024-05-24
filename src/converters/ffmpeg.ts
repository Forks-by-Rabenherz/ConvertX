import { exec } from "node:child_process";

// This could be done dynamically by running `ffmpeg -formats` and parsing the output
export const properties = {
  from: {
    video: [
      "012v",
      "4xm",
      "8bps",
      "aasc",
      "agm",
      "aic",
      "alias_pix",
      "amv",
      "anm",
      "ansi",
      "apng",
      "arbc",
      "argo",
      "asv1",
      "asv2",
      "aura",
      "aura2",
      "av1",
      "avrn",
      "avrp",
      "avs",
      "avui",
      "ayuv",
      "bethsoftvid",
      "bfi",
      "binkvideo",
      "bintext",
      "bitpacked",
      "bmp",
      "bmv_video",
      "brender_pix",
      "c93",
      "cavs",
      "cdgraphics",
      "cdtoons",
      "cdxl",
      "cfhd",
      "cinepak",
      "clearvideo",
      "cljr",
      "cllc",
      "cmv",
      "cpia",
      "cri",
      "cscd",
      "cyuv",
      "dds",
      "dfa",
      "dirac",
      "dnxhd",
      "dpx",
      "dsicinvideo",
      "dvvideo",
      "dxa",
      "dxtory",
      "dxv",
      "escape124",
      "escape130",
      "exr",
      "ffv1",
      "ffvhuff",
      "fic",
      "fits",
      "flashsv",
      "flashsv2",
      "flic",
      "flv1",
      "fmvc",
      "fraps",
      "frwu",
      "g2m",
      "gdv",
      "gif",
      "h261",
      "h263",
      "h263i",
      "h263p",
      "h264",
      "hap",
      "hevc",
      "hnm4video",
      "hq_hqa",
      "hqx",
      "huffyuv",
      "hymt",
      "idcin",
      "idf",
      "iff_ilbm",
      "imm4",
      "imm5",
      "indeo2",
      "indeo3",
      "indeo4",
      "indeo5",
      "interplayvideo",
      "ipu",
      "jpeg2000",
      "jpegls",
      "jv",
      "kgv1",
      "kmvc",
      "lagarith",
      "loco",
      "lscr",
      "m101",
      "mad",
      "magicyuv",
      "mdec",
      "mimic",
      "mjpeg",
      "mjpegb",
      "mmvideo",
      "mobiclip",
      "motionpixels",
      "mpeg1video",
      "mpeg2video",
      "mpeg4",
      "msa1",
      "mscc",
      "msmpeg4v1",
      "msmpeg4v2",
      "msmpeg4v3",
      "msp2",
      "msrle",
      "mss1",
      "mss2",
      "msvideo1",
      "mszh",
      "mts2",
      "mv30",
      "mvc1",
      "mvc2",
      "mvdv",
      "mvha",
      "mwsc",
      "mxpeg",
      "notchlc",
      "nuv",
      "paf_video",
      "pam",
      "pbm",
      "pcx",
      "pfm",
      "pgm",
      "pgmyuv",
      "pgx",
      "photocd",
      "pictor",
      "pixlet",
      "png",
      "ppm",
      "prores",
      "prosumer",
      "psd",
      "ptx",
      "qdraw",
      "qpeg",
      "qtrle",
      "r10k",
      "r210",
      "rasc",
      "rawvideo",
      "rl2",
      "roq",
      "rpza",
      "rscc",
      "rv10",
      "rv20",
      "rv30",
      "rv40",
      "sanm",
      "scpr",
      "screenpresso",
      "sga",
      "sgi",
      "sgirle",
      "sheervideo",
      "simbiosis_imx",
      "smackvideo",
      "smc",
      "smvjpeg",
      "snow",
      "sp5x",
      "speedhq",
      "srgc",
      "sunrast",
      "svg",
      "svq1",
      "svq3",
      "targa",
      "targa_y216",
      "tdsc",
      "tgq",
      "tgv",
      "theora",
      "thp",
      "tiertexseqvideo",
      "tiff",
      "tmv",
      "tqi",
      "truemotion1",
      "truemotion2",
      "truemotion2rt",
      "tscc",
      "tscc2",
      "txd",
      "ulti",
      "utvideo",
      "v210",
      "v210x",
      "v308",
      "v408",
      "v410",
      "vb",
      "vble",
      "vc1",
      "vc1image",
      "vcr1",
      "vixl",
      "vmdvideo",
      "vmnc",
      "vp3",
      "vp4",
      "vp5",
      "vp6",
      "vp6a",
      "vp6f",
      "vp7",
      "vp8",
      "vp9",
      "wcmv",
      "webp",
      "wmv1",
      "wmv2",
      "wmv3",
      "wmv3image",
      "wnv1",
      "wrapped_avframe",
      "ws_vqa",
      "xan_wc3",
      "xan_wc4",
      "xbin",
      "xbm",
      "xface",
      "xpm",
      "xwd",
      "y41p",
      "ylc",
      "yop",
      "yuv4",
      "zerocodec",
      "zlib",
      "zmbv",
    ],
    audio: [
      "8svx_exp",
      "8svx_fib",
      "aac",
      "aac_latm",
      "ac3",
      "acelp.kelvin",
      "adpcm_4xm",
      "adpcm_adx",
      "adpcm_afc",
      "adpcm_agm",
      "adpcm_aica",
      "adpcm_argo",
      "adpcm_ct",
      "adpcm_dtk",
      "adpcm_ea",
      "adpcm_ea_maxis_xa",
      "adpcm_ea_r1",
      "adpcm_ea_r2",
      "adpcm_ea_r3",
      "adpcm_ea_xas",
      "adpcm_g722",
      "adpcm_g726",
      "adpcm_g726le",
      "adpcm_ima_alp",
      "adpcm_ima_amv",
      "adpcm_ima_apc",
      "adpcm_ima_apm",
      "adpcm_ima_cunning",
      "adpcm_ima_dat4",
      "adpcm_ima_dk3",
      "adpcm_ima_dk4",
      "adpcm_ima_ea_eacs",
      "adpcm_ima_ea_sead",
      "adpcm_ima_iss",
      "adpcm_ima_moflex",
      "adpcm_ima_mtf",
      "adpcm_ima_oki",
      "adpcm_ima_qt",
      "adpcm_ima_rad",
      "adpcm_ima_smjpeg",
      "adpcm_ima_ssi",
      "adpcm_ima_wav",
      "adpcm_ima_ws",
      "adpcm_ms",
      "adpcm_mtaf",
      "adpcm_psx",
      "adpcm_sbpro_2",
      "adpcm_sbpro_3",
      "adpcm_sbpro_4",
      "adpcm_swf",
      "adpcm_thp",
      "adpcm_thp_le",
      "adpcm_vima",
      "adpcm_xa",
      "adpcm_yamaha",
      "adpcm_zork",
      "alac",
      "amr_nb",
      "amr_wb",
      "ape",
      "aptx",
      "aptx_hd",
      "atrac1",
      "atrac3",
      "atrac3al",
      "atrac3p",
      "atrac3pal",
      "atrac9",
      "avc",
      "binkaudio_dct",
      "binkaudio_rdft",
      "bmv_audio",
      "codec2",
      "comfortnoise",
      "cook",
      "derf_dpcm",
      "dolby_e",
      "dsd_lsbf",
      "dsd_lsbf_planar",
      "dsd_msbf",
      "dsd_msbf_planar",
      "dsicinaudio",
      "dss_sp",
      "dst",
      "dts",
      "dvaudio",
      "eac3",
      "evrc",
      "fastaudio",
      "flac",
      "g723_1",
      "g729",
      "gremlin_dpcm",
      "gsm",
      "gsm_ms",
      "hca",
      "hcom",
      "iac",
      "ilbc",
      "imc",
      "interplay_dpcm",
      "interplayacm",
      "mace3",
      "mace6",
      "metasound",
      "mlp",
      "mp1",
      "mp2",
      "mp3",
      "mp3adu",
      "mp3on4",
      "mp4als",
      "musepack7",
      "musepack8",
      "nellymoser",
      "opus",
      "paf_audio",
      "pcm_alaw",
      "pcm_bluray",
      "pcm_dvd",
      "pcm_f16le",
      "pcm_f24le",
      "pcm_f32be",
      "pcm_f32le",
      "pcm_f64be",
      "pcm_f64le",
      "pcm_lxf",
      "pcm_mulaw",
      "pcm_s16be",
      "pcm_s16be_planar",
      "pcm_s16le",
      "pcm_s16le_planar",
      "pcm_s24be",
      "pcm_s24daud",
      "pcm_s24le",
      "pcm_s24le_planar",
      "pcm_s32be",
      "pcm_s32le",
      "pcm_s32le_planar",
      "pcm_s64be",
      "pcm_s64le",
      "pcm_s8",
      "pcm_s8_planar",
      "pcm_sga",
      "pcm_u16be",
      "pcm_u16le",
      "pcm_u24be",
      "pcm_u24le",
      "pcm_u32be",
      "pcm_u32le",
      "pcm_u8",
      "pcm_vidc",
      "qcelp",
      "qdm2",
      "qdmc",
      "ra_144",
      "ra_288",
      "ralf",
      "roq_dpcm",
      "s302m",
      "sbc",
      "sdx2_dpcm",
      "shorten",
      "sipr",
      "siren",
      "smackaudio",
      "sol_dpcm",
      "sonic",
      "speex",
      "tak",
      "truehd",
      "truespeech",
      "tta",
      "twinvq",
      "vmdaudio",
      "vorbis",
      "wavesynth",
      "wavpack",
      "westwood_snd1",
      "wmalossless",
      "wmapro",
      "wmav1",
      "wmav2",
      "wmavoice",
      "xan_dpcm",
      "xma1",
      "xma2",
    ],
    subtitles: [
      "ass",
      "dvb_subtitle",
      "dvb_teletext",
      "dvd_subtitle",
      "eia_608",
      "hdmv_pgs_subtitle",
      "jacosub",
      "microdvd",
      "mov_text",
      "mpl2",
      "pjs",
      "realtext",
      "sami",
      "stl",
      "subrip",
      "subviewer",
      "subviewer1",
      "text",
      "vplayer",
      "webvtt",
      "xsub",
    ],
  },
  to: {
    video: [
      "a64_multi",
      "a64_multi5",
      "ljpeg",
      "alias_pix",
      "amv",
      "apng",
      "asv1",
      "asv2",
      "av1",
      "avrp",
      "avui",
      "ayuv",
      "bmp",
      "cfhd",
      "cinepak",
      "cljr",
      "dirac",
      "dnxhd",
      "dpx",
      "dvvideo",
      "exr",
      "ffv1",
      "ffvhuff",
      "fits",
      "flashsv",
      "flashsv2",
      "flv1",
      "gif",
      "h261",
      "h263",
      "h263p",
      "h264",
      "hap",
      "hevc",
      "huffyuv",
      "jpeg2000",
      "jpegls",
      "magicyuv",
      "mjpeg",
      "mpeg1video",
      "mpeg2video",
      "mpeg4",
      "msmpeg4v2",
      "msmpeg4v3",
      "msvideo1",
      "pam",
      "pbm",
      "pcx",
      "pfm",
      "pgm",
      "pgmyuv",
      "png",
      "ppm",
      "prores",
      "qtrle",
      "r10k",
      "r210",
      "rawvideo",
      "roq",
      "rpza",
      "rv10",
      "rv20",
      "sgi",
      "snow",
      "speedhq",
      "sunrast",
      "svq1",
      "targa",
      "theora",
      "tiff",
      "utvideo",
      "v210",
      "v308",
      "v408",
      "v410",
      "vp8",
      "vp9",
      "webp",
      "wmv1",
      "wmv2",
      "wrapped_avframe",
      "xbm",
      "xface",
      "xwd",
      "y41p",
      "yuv4",
      "zlib",
      "zmbv",
    ],
    audio: [
      "aac",
      "ac3",
      "adpcm_adx",
      "adpcm_argo",
      "adpcm_g722",
      "adpcm_g726",
      "adpcm_g726le",
      "adpcm_ima_alp",
      "adpcm_ima_amv",
      "adpcm_ima_apm",
      "adpcm_ima_qt",
      "adpcm_ima_ssi",
      "adpcm_ima_wav",
      "adpcm_ms",
      "adpcm_swf",
      "adpcm_yamaha",
      "alac",
      "aptx",
      "aptx_hd",
      "codec2",
      "comfortnoise",
      "dts",
      "eac3",
      "flac",
      "g723_1",
      "gsm",
      "gsm_ms",
      "mlp",
      "mp2",
      "mp3",
      "nellymoser",
      "opus",
      "pcm_alaw",
      "pcm_dvd",
      "pcm_f32be",
      "pcm_f32le",
      "pcm_f64be",
      "pcm_f64le",
      "pcm_mulaw",
      "pcm_s16be",
      "pcm_s16be_planar",
      "pcm_s16le",
      "pcm_s16le_planar",
      "pcm_s24be",
      "pcm_s24daud",
      "pcm_s24le",
      "pcm_s24le_planar",
      "pcm_s32be",
      "pcm_s32le",
      "pcm_s32le_planar",
      "pcm_s64be",
      "pcm_s64le",
      "pcm_s8",
      "pcm_s8_planar",
      "pcm_u16be",
      "pcm_u16le",
      "pcm_u24be",
      "pcm_u24le",
      "pcm_u32be",
      "pcm_u32le",
      "pcm_u8",
      "pcm_vidc",
      "ra_144",
      "roq_dpcm",
      "s302m",
      "sbc",
      "sonic",
      "speex",
      "truehd",
      "tta",
      "vorbis",
      "wavpack",
      "wmav1",
      "wmav2",
    ],
    subtitles: [
      "ass",
      "dvb_subtitle",
      "dvd_subtitle",
      "mov_text",
      "subrip",
      "text",
      "webvtt",
      "xsub",
    ],
  },
};

export async function convert(
  filePath: string,
  fileType: string,
  convertTo: string,
  targetPath: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  options?: any,
) {
  let command = "ffmpeg";

  const notWorking = ["bmp"];

  if (!(fileType in notWorking)) {
    command += ` -f "${fileType}"`;
  }

  command += ` -i "${filePath}"`;

  if (!(convertTo in notWorking)) {
    command += ` -f "${convertTo}"`;
  }

  command += " ${targetPath}";

  return exec(command, (error, stdout, stderr) => {
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
  });
}
