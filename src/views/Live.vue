
<script>
import { Config } from "../config/ConfigData";
export default {
  name: "ComingSoon",
  created: () => window.location.replace(Config.live.link)
};
</script>
