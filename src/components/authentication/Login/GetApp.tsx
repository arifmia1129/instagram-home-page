import appStore from "../../../assets/app-store.png";
import playStore from "../../../assets/play-store.png";

export default function GetApp() {
  return (
    <div className="mt-5">
      <p className="text-md text-center">Get the app.</p>
      <div className="md:flex justify-center items-center">
        <a
          className="flex justify-center items-center"
          href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"
          target="__blank"
        >
          <img className="w-44 h-12" src={appStore} alt="" />
        </a>
        <a
          className="flex justify-center items-center"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DDAE8E591-E191-4306-8582-DBD04D47CEFC%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F"
          target="__blank"
        >
          <img className="w-44 h-16" src={playStore} alt="" />
        </a>
      </div>
    </div>
  );
}
