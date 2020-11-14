
const tokenBegin = `=======================================================================================
*BEGIN*
=======================================================================================`

const tokenEnd = `=======================================================================================
*END*
=======================================================================================`

function normalizeLineEndings(text: string): string {
    return text.replace(/\r\n/g, "\n");
}

export function readTextKeyValueGroups(text: string): Map<string, string>[] {
    const normalizedText = normalizeLineEndings(text);
    const contents = normalizedText.split(tokenBegin)[1].split(tokenEnd)[0].trim();
    const groupChunks = contents.split("\n\n").map((chunk) => chunk.trim());

    const groups = groupChunks.filter(value => value).map((chunk) => {
        const lines = chunk.split("\n");
        const keyValuePairs: [string, string][] = lines
        .map(line => line.trim())
        .filter(line => line)
        .map(line => line.split(":="))
        .filter(items => {
            if (items.length === 2) {
                return true
            } else {
                console.log(items);
                return false;
            }
        })
        .map((pieces)=> {
                const key = pieces[0].trim();
                const value = pieces[1].trim();
                return [key, value] 
            }
        );

        const groupKeyValues = new Map<string, string>(keyValuePairs);
        
        return groupKeyValues;
    });

    return groups;
}