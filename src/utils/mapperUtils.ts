
export class MapperUtils {
    public getStructureTableOptions(tableNamePostgres: string, KeyIndex: string) {
        return {
          comment: '',
          indexes: [{unique: true, fields: [KeyIndex]}],
          tableName: tableNamePostgres,
          timestamps: false,
        };
    }
}

const mapperUtils = new MapperUtils();
export default mapperUtils;
