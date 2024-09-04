"use client";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-[#8c5e58] mb-4 relative inline-block">
        {title}
      </h2>
      {/* Section Subtitle */}
      {subtitle && (
        <p className="text-[#8c5e58]/80 max-w-[600px] mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
