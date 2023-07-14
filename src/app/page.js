import Tweet from "./components/Tweet";
import path from "path";
import fs from "fs";

async function getData() {
  const filePath = path.join(process.cwd(), "data.json");
  console.log(filePath);
  const tweets = JSON.parse(fs.readFileSync(filePath));
  return tweets;
}

export default async function Page() {
  const tweets = await getData();

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      {tweets.map((tweet) => (
        <div className="mx-auto my-3">
          <Tweet tweet={tweet.text} author={tweet.author} date={tweet.date} />
        </div>
      ))}
    </div>
  );
}
