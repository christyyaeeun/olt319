import '../styles/style.css'

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small className='date'>{date}</small>        

        <button className="del" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
};

export default Note;
