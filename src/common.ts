
export interface EditorSettings {
	extensions: string[];
	folding: boolean;
	lineNumbers: boolean;
	minimap: boolean;
	semanticValidation: boolean;
	syntaxValidation: boolean;
	themeColor: string;
	fontSize: number;
}

export const DEFAULT_SETTINGS: EditorSettings = {
	extensions: ["ts", "js", "html", "py", "css","c", "cpp", "go","rs","java","lua", "php"],
	folding: true,
	lineNumbers: true,
	minimap: true,
	semanticValidation: true,
	syntaxValidation: true,
	themeColor: "AUTO",
	fontSize: 16,
}


export const viewType = "vscode-editor";
