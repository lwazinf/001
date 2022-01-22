import styles from '../styles/Chat.module.css'

function Chat() {
    return (
      <div className={styles._container}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    );
  }
  
  export default Chat;

  
  function Tile() {
    return (
      <div className={styles._tile0}>
        <div className={styles._tile}>
          <div className={styles._tileLeft}>
            <div className={styles._title}>
              <div className={styles._displayPic} />
              <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px', marginTop: '12px', wordSpacing: '0px', letterSpacing: '0px' }}>Kate Rice</p>
            </div>
            <p style={{ margin: '0px', fontWeight: 'normal', marginTop: '-2px', marginLeft: '5px', fontSize: '13px' }}>I need another three boxes of these shoes by Wednesday!</p>
            <p style={{ margin: '0px', marginTop: '10px', letterSpacing: '0px', marginLeft: '5px', fontSize: '10px', color: '#b1b1b1' }}>SHOES | October 5, 2022</p>
          </div>
          <div className={styles._tileRight}>
            <div className={styles._cover} />
          </div>
        </div>
        <div className={styles._break} />
      </div>
    );
  }