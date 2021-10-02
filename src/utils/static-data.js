import AppleImage from "../images/apple.jpeg";
import AppleIcon from "../images/apple.png";
import Appricot from "../images/apricot.png";
import ApricotImage from "../images/apricot-image.jpeg";
import BananaImage from "../images/banana-image.jpeg";
import BananaIcon from "../images/banana.png";
import BlueBerryImage from "../images/blue-berry-image.jpeg";
import BlueBerryIcon from "../images/blueberry-icon.png";
import CherryIcon from "../images/cherry-icon.png";
import CherryImage from "../images/cherry-image.jpeg";
import DurianIcon from "../images/durian-icon.png";
import DurianImage from "../images/durian-image.jpeg";
import GrapesIcon from "../images/grapes-icon.png";
import GrapesImage from "../images/grapes-image.jpeg";
import GuavaIcon from "../images/guava-icon.png";
import GuavaImage from "../images/guava-image.jpeg";
import LemonIcon from "../images/lemon-icon.png";
import LemonImage from "../images/lemon-image.jpeg";
import LimeIcon from "../images/lime-icon.png";
import LimeImage from "../images/lime-image.jpeg";
import MangoIcon from "../images/mango-icon.png";
import MangoImage from "../images/mango-image.jpeg";
import MelonIcon from "../images/melon-icon.png";
import MelonImage from "../images/melon-image.jpeg";
import OrangeIcon from "../images/orange-icon.png";
import OrangeImage from "../images/orange-image.jpeg";
import PapayaIcon from "../images/papaya-icon.png";
import PapayaImage from "../images/papaya-image.jpeg";
import PearIcon from "../images/pear-icon.png";
import PearImage from "../images/pear-image.jpeg";
import PersimmonIcon from "../images/persimmon-icon.png";
import PersimmonImage from "../images/persimmon-image.jpeg";
import PineappleIcon from "../images/pineapple-icon.png";
import PineappleImage from "../images/pineapple-image.jpeg";
import RaspberryIcon from "../images/raspberry-icon.png";
import RaspberryImage from "../images/raspberries-image.jpeg";
import StrawberryIcon from "../images/strawberry-icon.png";
import StrawberriesImage from "../images/strawberries-image.jpeg";
import TomatoIcon from "../images/tomato-icon.png";
import TomatoImage from "../images/tomato-image.jpeg";
import WatermelonIcon from "../images/watermelon-icon.png";
import WatermelonImage from "../images/watermelon-image.jpeg";

export const StaticData = {
  fruits: [
    {
      slogan: "Apple - Think Different",
      image: AppleImage,
      icon: AppleIcon,
      name: "Apple",
    },
    {
      slogan: "Apricot - Do you like medicine ?",
      image: ApricotImage,
      icon: Appricot,
      name: "Apricot",
    },
    {
      slogan: "Banana - Spread Beautiful Smiles",
      image: BananaImage,
      icon: BananaIcon,
      name: "Banana",
    },
    {
      slogan: "The blues that make you feel good",
      image: BlueBerryImage,
      icon: BlueBerryIcon,
      name: "Blueberry",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: CherryImage,
      icon: CherryIcon,
      name: "Cherry",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: DurianImage,
      icon: DurianIcon,
      name: "Durian",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: GrapesImage,
      icon: GrapesIcon,
      name: "Grapes",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: GuavaImage,
      icon: GuavaIcon,
      name: "Guava",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: LemonImage,
      icon: LemonIcon,
      name: "Lemon",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: LimeImage,
      icon: LimeIcon,
      name: "Lime",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: MangoImage,
      icon: MangoIcon,
      name: "Mango",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: MelonImage,
      icon: MelonIcon,
      name: "Melon",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: OrangeImage,
      icon: OrangeIcon,
      name: "Orange",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: PapayaImage,
      icon: PapayaIcon,
      name: "Papaya",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: PearImage,
      icon: PearIcon,
      name: "Pear",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: PersimmonImage,
      icon: PersimmonIcon,
      name: "Persimmon",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: PineappleImage,
      icon: PineappleIcon,
      name: "Pineapple",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: RaspberryImage,
      icon: RaspberryIcon,
      name: "Raspberry",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: StrawberriesImage,
      icon: StrawberryIcon,
      name: "Strawberry",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: TomatoImage,
      icon: TomatoIcon,
      name: "Tomato",
    },
    {
      slogan: "Cherry - Eat Smart",
      image: WatermelonImage,
      icon: WatermelonIcon,
      name: "Watermelon",
    },
  ],
  renderNutritionalProperty: (itemObject) => {
    let nutritions = itemObject && itemObject.nutritions;
    let nutritionsValues = Object.values(nutritions);
    let nutritionsKey = Object.keys(nutritions);

    let chartData = nutritionsValues.map((item, index) => ({
      label: nutritionsKey[index],
      value: item,
    }));

    const chartConfigs = {
      type: "column2d",
      width: "700",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: itemObject.name,
          xAxisName: "Fruits Nutritional Property",
          numberSuffix: " %",
          theme: "fusion",
        },
        data: chartData,
      },
    };

    return chartConfigs;
  },
};
