import React, { useState, useEffect } from "react";

export default function useTranslate(text) {
  const [textTranslated, setTextTranslated] = useState("");

  const translate = async () => {
    try {
      if (json.responseStatus === 429) {
        throw new Error("API out of stock");
      }
      const data = await fetch(
        `https:api.mymemory.translated.net/get?q=${text}&langpair=en|es`
      );
      const json = await data.json();
      setTextTranslated(json.responseData.translatedText);
    } catch (error) {
      setTextTranslated(text);
    }
  };

  useEffect(() => {
    translate();
  }, [text]);

  return textTranslated;
}
