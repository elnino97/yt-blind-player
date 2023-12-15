export const Input = ({ inputEventHandler, value }) => {
  return (
    <>
      <label htmlFor="media-input" style={{ marginBottom: 8 }}>
        Insert YouTube link
      </label>
      <input
        onChange={inputEventHandler}
        type="text"
        id="media-input"
        name="media-input"
        value={value}
        style={{
          fontSize: 14,
          height: 32,
          borderRadius: 8,
          backgroundColor: "white",
          color: "black",
        }}
      />
    </>
  );
};
