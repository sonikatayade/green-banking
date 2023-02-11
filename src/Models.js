import logo from './logo.svg';
import './Table.css';

function ModelTable() {
  return (
    <div>
      <table>
        <tr>
            <th>Model Features</th>
            <th>Public</th>
            <th>Quasi Public</th>
            <th>Private</th>
        </tr>
          
        <tr>
            <td>Steve</td>
            <td>Manager</td>
            <td>1,00,000</td>
        </tr>
          
        <tr>
            <td>SURAJ</td>
            <td>Assistant Manager</td>
            <td>50,000</td>
        </tr>
          
        <tr>
            <td>Khushboo</td>
            <td>Analysist</td>
            <td>65,000</td>
        </tr>
          
        <tr>
            <td>Kartik</td>
            <td>Worker</td>
            <td>20,000</td>
        </tr>
          
        <tr>
            <td>Saksham</td>
            <td>Worker</td>
            <td>20,000</td>
        </tr>
    </table>
    </div>

  );
}

export default ModelTable;
