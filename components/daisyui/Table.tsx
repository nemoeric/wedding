import { formatEuro, formatDate } from "@/utils/format"
import { ReactNode } from "react";

interface TableProps {
  rows: Array<Array<string|number|ReactNode>>,
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
      <table className={`table `}>
        <thead>
          <tr>
            { headings.map( (heading, index) => <th key={index}>{heading}</th> )}
          </tr>
        </thead>
        <tbody>
          {rows.map( (row, i:number) => (
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