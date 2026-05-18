import { useState } from "react";
import axios from "axios";

function AIRecommendation() {

  const [result, setResult] =
    useState("");

  const getAIRecommendation =
    async () => {

      try {

        const response =
          await axios.post(
            "https://employee-backend-r4s8.onrender.com/api/ai/recommend"
          );

        setResult(
          response.data.content
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div>

      <h1>
        AI Recommendation
      </h1>

      <button
        onClick={getAIRecommendation}
      >
        Generate AI Report
      </button>

      <br /><br />

      <pre>
        {result}
      </pre>

    </div>

  );

}

export default AIRecommendation;