const Table = ({ records }) => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Label</th>
            <th>Genre</th>
            <th>RRP</th>
            <th>Copies Available</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.title}>
              <td>{record.title}</td>
              <td>{record.label}</td>
              <td>{record.genre}</td>
              <td>{record.rrp}</td>
              <td>{record.copies_available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
