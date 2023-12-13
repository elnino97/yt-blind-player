export const Input = ({ inputEventHandler, value }) => {
  return (
    <div>
      <label htmlFor="media-input" style={{ marginRight: 8 }}>
        Insert YouTube link
      </label>
      <input
        onChange={inputEventHandler}
        type="text"
        id="media-input"
        name="media-input"
        value={value}
      />
    </div>
  );
};
