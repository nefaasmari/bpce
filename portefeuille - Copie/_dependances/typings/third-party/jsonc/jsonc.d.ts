declare module JSONC {
    class JSONC {
        
    }

    function compress(json: any, option?: any): any;
    function decompress(json: any): any;

    function pack(json: any, bCompress?: any): string;
    function unpack(gzipped: any, bDecompress?: any): any;
} 
