import { formatEuro, formatDate } from "@/utils/format"

interface TableProps {
  rows: Array<Array<string|number>>,
  headings: Array<string|number>,
  formats: Array<string>,
}
const Table = ({
  rows, 
  headings, 
  formats, 
}: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className={`table table-zebra`}>
        <thead>
          <tr>
            { headings.map( (heading, index) => <th key={index}>{heading}</th> )}
          </tr>
        </thead>
        <tbody>
          {rows.map( (row:Array<string|number>, i:number) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  {(() => {
                    switch (formats[j]) {
                      case "euro": return formatEuro(cell);
                      case "date": return formatDate(cell);
                      default: return cell;
                    }
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );

}
export default Table;