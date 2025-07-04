import ts from "typescript";

export const getVersions = () => {
	const versions = {
		typescript: ts.version,
		node: process.version
	};
	return versions;
}