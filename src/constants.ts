import * as os from "os";
import * as path from "path";

import * as types from "./types";

//-----------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------
export const MINICONDA_DIR_PATH: string = process.env["CONDA"] || "";
export const IS_WINDOWS: boolean = process.platform === "win32";
export const IS_MAC: boolean = process.platform === "darwin";
export const IS_LINUX: boolean = process.platform === "linux";
export const IS_UNIX: boolean = IS_MAC || IS_LINUX;
export const MINICONDA_BASE_URL: string =
  "https://repo.anaconda.com/miniconda/";

export const ARCHITECTURES: types.IArchitectures = {
  x64: "x86_64",
  x86: "x86",
  ARM64: "aarch64", // To be supported by github runners
  ARM32: "armv7l", // To be supported by github runners
};

export const OS_NAMES: types.IOperatingSystems = {
  win32: "Windows",
  darwin: "MacOSX",
  linux: "Linux",
};

export const KNOWN_EXTENSIONS = [".exe", ".sh"];

/**
 * errors that are always probably spurious
 */
export const IGNORED_WARNINGS = [
  // appear on win install, we can swallow them
  `menuinst_win32`,
  `Unable to register environment`,
  `0%|`,
  // appear on certain Linux/OSX installers
  `Please run using "bash"`,
  // old condas don't know what to do with these
  `Key 'use_only_tar_bz2' is not a known primitive parameter.`,
];

/**
 * warnings that should be errors
 */
export const FORCED_ERRORS = [
  // conda env create will ignore invalid sections and move on
  `EnvironmentSectionNotValid`,
];

/**
 * avoid spurious conda warnings before we have a chance to update them
 */
export const BOOTSTRAP_CONDARC = "notify_outdated_conda: false";

/**
 * the conda config file
 */
export const CONDARC_PATH = path.join(os.homedir(), ".condarc");

/** Where to put files. Should eventually be configurable */
export const CONDA_CACHE_FOLDER = "conda_pkgs_dir";

/** the environment variable exported */
export const ENV_VAR_CONDA_PKGS = "CONDA_PKGS_DIR";