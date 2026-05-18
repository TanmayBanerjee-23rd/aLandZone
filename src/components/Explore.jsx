import React, { useMemo } from "react";
import Cards from "./Cards";
import health from "../assets/CGI/health.png";
import robotics from "../assets/CGI/robotics.png";
import casino from "../assets/CGI/casino.png";
import contruction from "../assets/CGI/contruction.png";
import influencer from "../assets/CGI/influencer.png";
import NFT from "../assets/CGI/NFT.png";
import survey from "../assets/CGI/survey.png";
import sports from "../assets/CGI/sports.png";
import shoes from "../assets/CGI/shoes.png";
import portfolio from "../assets/CGI/portfolio.png";
import { AnimatePresence, motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";

const exploreCards = [
  {
    heading: "Health Care",
    img: health,
    tags: ["Mobile", "AI"],
  },
  {
    heading: "Robotics",
    img: robotics,
    tags: ["AI"],
  },
  {
    heading: "Casino Game",
    img: casino,
    tags: ["Mobile"],
  },
  {
    heading: "Construction",
    img: contruction,
    tags: ["Web"],
  },
  {
    heading: "Influencer",
    img: influencer,
    tags: ["Mobile"],
  },
  {
    heading: "NFT Platform",
    img: NFT,
    tags: ["AI", "Blockchain"],
  },
  {
    heading: "Survey",
    img: survey,
    tags: ["AI"],
  },
  {
    heading: "Sports",
    img: sports,
    tags: ["Web"],
  },
  {
    heading: "Shoes",
    img: shoes,
    tags: ["Web", "Mobile"],
  },
  {
    heading: "Portfolio",
    img: portfolio,
    tags: ["Web"],
  },
];

const Explore = () => {
  const filterOptions = useMemo(
    () => ["All", "Web", "Mobile", "AI", "Blockchain"],
    [],
  );

  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const [appliedFilter, setAppliedFilter] = React.useState("All");
  const [filteredCards, setFilteredCards] = React.useState(exploreCards);

  const handleFilterClick = (filter) => {
    setAppliedFilter(filter);
  };

  const applyFilter = () => {
    handleFilterClick(selectedFilter);

    if (selectedFilter === "All") {
      setFilteredCards(exploreCards);
    } else {
      setFilteredCards(
        exploreCards.filter((card) => card.tags.includes(selectedFilter)),
      );
    }
  };

  return (
    <>
      <div id="case-study" className="container mx-auto relative ">
        <div className=" flex lg:justify-between justify-center flex-wrap gap-x-20 gap-y-5 items-center text-white px-4 lg:px-20 pt-20 lg:pt-44 mx-20">
          <h1 className="text-3xl order-1 md:order-1 text-white font-semibold">
            Case Studies
          </h1>
          <div className="order-3 md:order-2">
            <div className="mb-20 flex flex-wrap items-center justify-center gap-4 ">
              <div className="flex gap-2 rounded-2xl border border-white/5 bg-white/5 p-1.5 backdrop-blur-md w-80 md:w-auto lg:w-auto overflow-x-auto no-scrollbar hide-scroll-bar">
                {filterOptions.map((filter) => {
                  const isSelected = selectedFilter === filter;
                  const isActive = appliedFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`relative rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isSelected
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFilterBg"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700/20 via-pink-400/20 to-cyan-300/20 blur-[1px]"
                        />
                      )}

                      {isSelected && (
                        <motion.div
                          layoutId="selectedFilterBorder"
                          className="absolute inset-0 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        />
                      )}

                      <span className="relative z-10">{filter}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={applyFilter}
                className="group flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-slate-200 active:scale-95"
              >
                <span>Apply</span>
                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <div class=" absolute inset-0 translate-x-[10px]  top-32 -z-10  bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400 "></div>
          <div className="flex flex-wrap gap-x-10  gap-y-10 mt-10 justify-center px-20">
            <AnimatePresence mode="wait">
              {filteredCards.map((explore, index) => (
                <Cards
                  key={index}
                  img={explore.img}
                  heading={explore.heading}
                  shouldAnimate={true}
                  smallScreen={false}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div class="lg:hidden xs:flex my-5  overflow-x-scroll no-scrollbar hide-scroll-bar">
        <div class="flex flex-nowrap gap-x-12 pt-5 px-8 py-10">
          <AnimatePresence mode="wait">
            {filteredCards.map((explore, index) => (
              <Cards
                key={index}
                img={explore.img}
                heading={explore.heading}
                shouldAnimate={true}
                smallScreen={true}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Explore;
