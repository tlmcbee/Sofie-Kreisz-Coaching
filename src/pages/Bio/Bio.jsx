export default function Bio() {
  return (
      <>
        <img 
          src={process.env.PUBLIC_URL + '/headshot2.jpg'}
          alt="Headshot 2"
          style={{
            height: "300px",
            width: " 275px",
            border: "solid 2px white",
            borderRadius: "10px",
            marginTop: "25px"
          }}
        
        />
        <div style={{textAlign: "justify"}}>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar leo rhoncus molestie, parturient maximus rutrum luctus diam. Mus fermentum vestibulum sapien finibus curabitur porttitor finibus taciti. Viverra sagittis sapien non nibh, efficitur euismod torquent. 
            Sed dignissim elit ligula aliquet vehicula. Tristique ex duis vivamus nascetur imperdiet ante facilisi. Lorem id porta porttitor enim congue aliquet ex mauris senectus. Feugiat fames sagittis faucibus et, rutrum a.
          </p>
          <p>
            Consectetur dictum interdum suscipit fames arcu; ultricies aenean lacus. Molestie diam tortor habitasse nostra maximus proin leo sociosqu? Consectetur ex consectetur massa parturient, duis vulputate. 
            Dignissim nibh ac bibendum aptent laoreet a justo. Aptent lobortis phasellus ad vitae cubilia nibh. Et purus malesuada enim tincidunt vehicula orci sociosqu platea. Gravida cubilia vel fermentum interdum ex conubia in ligula.
          </p>
          <p>
            Non fermentum aliquam odio maximus ac nullam platea. Aliquam sociosqu tempor ac amet bibendum, mi justo iaculis. Malesuada pulvinar ullamcorper senectus; inceptos amet nec. 
            Magna class mollis sodales non imperdiet. Taciti dolor est viverra per porttitor eros lacus dictum ligula. Ornare facilisis tristique elementum habitasse sapien ultrices mattis, risus lacus. Suspendisse mollis feugiat vitae nunc; adipiscing etiam ipsum.
          </p>       
        </div>
      </>
  )
}