


export default function AboutMe() {
  return (
    <>
      <img 
        src={process.env.PUBLIC_URL + "/headshot.jpg"} 
        alt="headshot" 
        style={{ 
          height: "200px",
          width: "200px"}}
      />
      <div 
        style={{
          textAlign: "justify",
           display: "flex",
          alignItems: "center"
        }}
      >
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse torquent sagittis accumsan urna elit scelerisque sollicitudin rhoncus.
          Ornare montes ornare venenatis vel a torquent torquent. Nisl hac amet orci convallis montes molestie pharetra iaculis maecenas. 
          Sagittis senectus senectus est cubilia sociosqu sed. Volutpat euismod ipsum primis turpis egestas pharetra et. Sodales viverra mattis hendrerit ac et. 
          Augue quis consequat accumsan eros lacus natoque purus dis.
        </p>
        <img 
          src={process.env.PUBLIC_URL + "/trolley.jpg"}
          alt="Trolley"
          style={{
            height: "40vmin",
            width: "70vmin",
            margin: "10px"
          }}

        />
      </div>
      <div
        style={{
          textAlign: "justify",
          display: "flex",
          alignItems: "center"
        }}
        >
      <img 
        src={process.env.PUBLIC_URL + "/parliament.jpg"} 
        alt="Parliament"
        style={{
          height: "40vmin",
          width: "70vmin",
          margin: "10px"
        }}
      />
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse torquent sagittis accumsan urna elit scelerisque sollicitudin rhoncus.
        Ornare montes ornare venenatis vel a torquent torquent. Nisl hac amet orci convallis montes molestie pharetra iaculis maecenas. 
        Sagittis senectus senectus est cubilia sociosqu sed. Volutpat euismod ipsum primis turpis egestas pharetra et. Sodales viverra mattis hendrerit ac et. 
        Augue quis consequat accumsan eros lacus natoque purus dis.
      </p>
      </div>
    </>
  )
}
