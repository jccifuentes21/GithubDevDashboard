import { useNavigate } from "react-router";
import useStore from "../../store/store";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const username_regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

const FEATURES = ["Repo browser", "Language breakdown", "Activity graph", "Dark mode"];

const Landing = () => {
  const { setUsername } = useStore();
  const [inputText, setInputText] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (value: string) => username_regex.test(value);

  const handleSubmit = () => {
    if (validateUsername(inputText)) {
      setUsername(inputText);
      navigate(`/${inputText}`);
    } else {
      setIsInputInvalid(true);
      toast.error("Invalid GitHub username.");
    }
  };

  return (
    <div className="min-h-screen bg-[oklch(0.14_0.045_210)] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="flex flex-col items-center gap-5 w-full max-w-[540px] text-center">

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium animate-[fade-in-up_0.5s_ease-out_both]"
          style={{
            borderColor: "oklch(0.30 0.040 195)",
            backgroundColor: "oklch(0.18 0.038 210)",
            color: "oklch(0.68 0.16 185)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.68_0.16_185)]" />
          GitHub REST API
        </div>

        <h1
          className="text-[52px] font-bold tracking-[-0.03em] leading-[1.1] text-[oklch(0.96_0.005_210)] animate-[fade-in-up_0.5s_ease-out_both]"
          style={{ animationDelay: "80ms" }}
        >
          Your GitHub profile,
          <br />
          understood.
        </h1>

        <p
          className="text-[17px] leading-[1.65] max-w-[380px] text-[oklch(0.56_0.012_210)] animate-[fade-in-up_0.5s_ease-out_both]"
          style={{ animationDelay: "160ms" }}
        >
          Repos, languages, and activity in one place. No auth required.
        </p>

        <div
          className="flex w-full gap-2 mt-3 animate-[fade-in-up_0.5s_ease-out_both]"
          style={{ animationDelay: "240ms" }}
        >
          <Input
            className={cn(
              "h-11 flex-1 text-base",
              "bg-[oklch(0.18_0.035_210)] text-[oklch(0.94_0.005_210)]",
              "placeholder:text-[oklch(0.38_0.010_210)]",
              isInputInvalid
                ? "border-[oklch(0.60_0.22_25)] focus-visible:border-[oklch(0.60_0.22_25)]"
                : "border-[oklch(0.28_0.038_210)] focus-visible:border-[oklch(0.65_0.22_265)]"
            )}
            placeholder="Enter a GitHub username"
            aria-invalid={isInputInvalid}
            onChange={(e) => {
              setIsInputInvalid(false);
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <Button
            onClick={handleSubmit}
            className="h-11 px-5 font-medium shrink-0 cursor-pointer bg-[oklch(0.65_0.22_265)] text-[oklch(0.97_0.005_265)] hover:bg-[oklch(0.70_0.22_265)] active:scale-[0.97] transition-[transform,background-color] duration-[160ms] ease-out"
          >
            Search
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {FEATURES.map((feature, i) => (
            <span
              key={feature}
              className="px-2.5 py-1 rounded-md text-xs bg-[oklch(0.18_0.035_210)] border border-[oklch(0.26_0.038_210)] text-[oklch(0.55_0.018_210)] animate-[fade-in-up_0.5s_ease-out_both]"
              style={{ animationDelay: `${320 + i * 50}ms` }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Landing;
