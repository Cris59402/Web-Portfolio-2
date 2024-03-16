"use client";

import React from "react";
import Cards from "../sub/Cards";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent text-white py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Cards
          src="/yaf.png"
          title="YAF Frontend Project"
          description="Young Ambassadors Forum is a project for young ambassadors, where I worked on the frontend in Angular.CLI, creating interactive pages, but also sections like login and register, the database being made in Microsoft SQL Server."
        />
        <Cards
          src="/ticket.png"
          title="Ticket-App"
          description="TicketCH-App is a project that aims to create tickets with issues that are discovered and to be resolved, they are stored in a NoSQL MongoDB database, here being created a unique id for each ticket and the format is JSON."
        />
        <Cards
          src="/warehouse.png"
          title="Warehouse"
          description="Crud application that stores in a Microsoft SQL Server database the products from a warehouse, the backend is in .NET and C# and the frontend in react"
        />
      </div>
    </div>
  );
};

export default Projects;
