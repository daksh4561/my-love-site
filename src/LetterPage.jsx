import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const letterContent = {

  H: [
    {
      word: "Heartbound",
      message: "hy my princess..its been days i made something for you and made u happy , if i would have been there i would have given you something live but lets take this distance as a relationship phase..So let's begin with letter H of your such a beautiful name which deserved a word called HEARTHBOUND -- the warmth and laughter I feel with you when no one is there to support me and u are the one standing there for me always and supporting me like I can conquer the world , that support and love shows how stronger is the bond between us..LOVEYOUUU",
      img: "https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.34.44%20PM%20(1).jpeg?raw=true"
    },
  ],
  A: [
    {
      word: "Aetherial",
      message: "YOU ARE AETHERIAL . I mean can't be a more perfect word for you that how much you make people feel good , everyone around you feels energetic and happy just by seeing your smile my babygurl..the planet Earth is grateful to have YOU and you deserve every happiness in the world..",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.34.44%20PM%20(2).jpeg?raw=true"
    },
    {
      word: "Aetherial",
      message: "YOU ARE AETHERIAL . I mean can't be a more perfect word for you that how much you make people feel good , everyone around you feels energetic and happy just by seeing your smile my babygurl..the planet Earth is grateful to have YOU and you deserve every happiness in the world..",
       img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.34.44%20PM%20(2).jpeg?raw=true"
    },
    
    {
      word: "Amourine",
      message: "A rare word for rare love — delicate, precious, and entirely you.",
      img:"https://i.ibb.co/nNSQhMC0/Whats-App-Image-2025-06-29-at-11-34-44-PM-3.jpg"
    },
    {
      word: "Angel-hearted",
      message: "So kind, so gentle — like an angel who fell just to love me better.",
    },
    {
      word: "Amourine",
      message: "Amourine. It’s not a word you hear often...because it’s meant for rare kinds of love. The kind of love that’s soft but strong, gentle but deep. And that’s exactly what I feel when I think of you. You’re not just someone I love — you’re someone I wanna hold carefully like I found a needle in a dessert , like something precious I never wanna lose..till you are with me I will always care and love you and I never want to let you goo...",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-30%20at%2012.00.46%20AM.jpeg?raw=true"

    },
  ],
  R: [
    {
      word: "Rare",
      message: " That’s the word that keeps coming to mind when I think of you. Not just because you’re different...but because you’re unforgettable. You have a way of being YOU (Miss harleen kaur) , you have an individuality..your feminine enrgy tells it all... The way you care, the way you smile, the way you just exist. So glamorous.",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.45.34%20PM%20(1).jpeg?raw=true"
    },
    {
      word: "Rose-kissed",
      message: "Rutilant. It’s not a word people say out loud often — but when I found it, I instantly thought of you. It means glowing with a golden or reddish light, like the soft warmth of a sunset. And that’s what you are to me. You don’t just light up a room...that's it for now iguess I can express you in a lot more words youu are not the one to be summarized in some lines but you are someone on which a book can be written..LOVEYOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU HARLEEN INFINITELY",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.34.44%20PM.jpeg?raw=true"
    },
  ],
  L: [
    {
      word: "Lucent",
      message: "Lucent — that’s the word that captures your essence. You glow with a light that doesn’t just shine — it softens, warms, and heals. You’re the calm in chaos, the sparkle in silence, the brightness I didn’t know I needed, even on my worst days, your presence is like sunshine breaking through clouds. you don’t need to shine the loudest- you shine in a way that stays... quiet, gentle, real. you’re my lucent light, always.",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.34.44%20PM%20(3).jpeg?raw=true"
    },
  ],
  E: [
    {
      word: "Edelweiss",
      message: "Edelweiss...A rare flower in the Alps — pure, delicate, and deeply cherished..just like this my love, you are the rarest flower in the garden of my heart. and I like watering this flower and keeping it happy and healthy,so that it can bloom and you can spread the happiness and the charm yoouu hold on yourself ..ALWAYS KEEP BLOOMING and BE HAPPY BABY.  ",
      img:"https://i.ibb.co/Tq0Ky0vs/Whats-App-Image-2025-06-29-at-11-46-30-PM.jpg"
    },
    {
      word: "Euphrosyne",
      message: "goddess of joy and laughter..you know what harleen your laugh and your face when something unexpectedd happens..and that breath intake which you have at a sudden I JUST FUCKIN MISSSS THHHAAATTTTTTTTT...pleaseee i wanna meet you so curiouslyyy..I literally wanna hug you like anything..just come to delhi fasstt and i'll surprise you with many much things just come and i'll shower you with my loveeee..AlWAYS AT YOUR SERVICE MADAM AND GIVING YOU FLOWERS IS THE BEST PART OF MY LIFEE (see below--virtual flowers for youu)..I didn’t know that joy had a name, until I met you.",
      img:"https://i.ibb.co/xtXDsYxp/Whats-App-Image-2025-06-29-at-11-51-15-PM.jpg"
    },
  ],
  N: [
    {
      word: "Naughtyyy",
      message: "The way you care is magic...but the fun we had together and that nirvana memories are just captured in my heart like a permanent tattoo which I can never forget and I never want too....I miss kissing you..kissing you're whole body and making you feel loved..yeah we did naughty things together and I miss that too babyggurl ...but lets not regret and when I meet you we will again have very much fun...remember the photo below hahaha we hid it bcoz u had a class presentation right after thatttt lol ",
      img: "https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-30%20at%2012.06.53%20AM.jpeg?raw=true"

    },
  ],
  K: [
    {
      word: "Kindred",
      message: "Kindred..that’s what you are to me..not just someone I love, but someone my soul recognizes. It feels like we’ve known each other long before we ever met, like the universe gently guided us back together..like u once said that we are in a KARMIC RELATIONSHIP and now I can assure you because of the vibe we match and the amount of similarities we have...We just met and we clicked like we were always meant to be..may you be my soulmate and my permanent love in another universeee... ",
      img: "https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.58.52%20PM.jpeg?raw=true"
    }
  ],
  U: [
    {
      word: "Unasinous",
      message: "Yes! that's the word Unasinous..this one means one mind or thinking like one..there's a reason people call you as my other half cutiepii..That’s what it feels like with you. Like somehow, we’re always in sync. You say what I’m thinking. I laugh before you finish your sentence. And when I’m quiet, you still understand me.You know me so well that when am sad over on a call you still get me thst somethings off ..and call me back to ask is everything okay daksh?..uknow that's the loveliest part..same goes with me iknow when your energy is down or when u are not in the mood..so we both put in effort to make each other happyyy..coz we don't fight and sleep.. We don’t always need to explain ourselves — we just get each other. That kind of connection isn’t loud, it’s deep. ",
      img:"https://github.com/daksh4561/desktop-tutorial/blob/main/WhatsApp%20Image%202025-06-29%20at%2011.57.54%20PM.jpeg?raw=true"
    }
  ]
};


export default function LetterPage() {
  const { letter, index } = useParams();
  const navigate = useNavigate();

  const idx = parseInt(index || "0", 10);
  const contentArray = letterContent[letter.toUpperCase()];
  const content = contentArray?.[idx % contentArray.length] || {
    word: "Beautiful",
    message: "You're truly one of a kind.",
    img: "https://placekitten.com/306/306",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #fff0f5, #ffe4e1)",
        padding: "60px 20px",
        color: "#b4005c",
        fontFamily: "cursive",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3.5rem", textShadow: "2px 2px 6px rgba(0,0,0,0.3)" }}>
        {content.word}
      </h1>
      <p style={{ fontSize: "1.4rem", marginTop: "20px", maxWidth: "600px", margin: "0 auto" }}>
        {content.message}
      </p>
      <img
        src={content.img}
        alt="Memory"
        style={{
          marginTop: "40px",
          borderRadius: "12px",
          maxWidth: "90%",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        }}
      />
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            fontSize: "1rem",
            padding: "12px 24px",
            background: "#b4005c",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
