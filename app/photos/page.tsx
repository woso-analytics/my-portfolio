import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Some of my viz work</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/yui_prbr.png",
            alt: "Post Recovery Ball Retention Yui Hasegawa",
            // href: "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/07062025_wsl_crosses_with_sides.png",
            alt: "Table of Crossing Metrics WSL",
            // href: "https://unsplash.com/photos/big-ben-london-MdJq0zFUwrw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/07062025_wsl_cutback_kp.png",
            alt: "Table of Cutback Metrics WSL",
            // href: "https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4",
          },
          {
            src: "/photos/16062022_wsl_scatter.png",
            alt: "xG Scatter plots for all WSL teams 24/25",
            // href: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/weuro_penalties_goalmouth.png",
            alt: "Goal Mouth view of all the penalties Women's Euro 2025",
            // href: "https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo",
          },
          {
            src: "/photos/weuro_penalties.png",
            alt: "Aerial viel of all penalties Women's Euro 2025",
            // href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/wsl_shot_sequence_involvements.png",
            alt: "Shot Sequence Involvements WSL 24/25",
            // href: "https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo",
          },
          {
            src: "/photos/wsl_shot_turnovers.png",
            alt: "Turnovers Leading to shots WSL 24/25",
            // href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/wsl_turnover_zones.png",
            alt: "Zones where teams turn over the ball WSL 24/25",
            // href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
        ]}
      />

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
        ]}
      /> */}

      {/* <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      /> */}
    </section>
  );
}
