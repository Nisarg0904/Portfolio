import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className ?? ""} ${
              item.id === 2 ? "md:row-span-2" : ""
            }`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          >
            {/* Conditional anchor for item id 3 */}
            {item.id === 3 && (
              <a
                href="#skills"
                className="absolute inset-0 z-10"
                aria-label="Navigate to Skills"
              />
            )}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
