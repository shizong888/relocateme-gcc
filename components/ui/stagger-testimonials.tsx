"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Relocate (& Victoria Moss) helped me and family to relocate and settle in the UAE. They were really superb. They went way above the call of duty and we will forever be grateful for them. They simply gain our trust including our little ones.",
    by: "Dr. Sattar Alshryda, Paediatrician"
  },
  {
    tempId: 1,
    testimonial: "I would like to commend RelocateMe and their service with the highest possible praise. This service is a real asset to anyone planning a move to Dubai. I was shown lovely places to live in, this helped me to remove many doubts, queries, fears, etc. that are associated at the beginning of any move.",
    by: "Corporate Client, Oil & Gas"
  },
  {
    tempId: 2,
    testimonial: "Moving to a new country just adds to the burden. RelocateMe took a lot of the stress out of undertaking such a move. With knowledgeable agents in Abu Dhabi who did most the donkey work on finding a property, doing the filtering based on our specific requirements we found a property in a good location quickly.",
    by: "Peter O'Toole, Private Family Relocating"
  },
  {
    tempId: 3,
    testimonial: "Thank you to the amazing staff at Relocate Me. Especially the personable Victoria. You had a very difficult task in terms of my 'check out', dealing with a difficult landlord. Thank you for handling my 'small' job with sheer professionalism and care. You are amazing at what you do.",
    by: "Maxine Webb, Law Firm Dubai"
  },
  {
    tempId: 4,
    testimonial: "The orientation with Bhartie was absolutely fantastic she was simply incredible. She knows a lot about the history of Dubai and is a person who easily connects with people. She fully understood the circumstances that I had and the type of accommodation that I was looking for.",
    by: "Corporate Client, Employee Relocating"
  },
  {
    tempId: 5,
    testimonial: "Victoria and Relocate did an amazing job with Creative to secure our company registration, visas and UAE ID. Fast, efficient, great comms and great value. Would highly recommend.",
    by: "David Hughes, I'm Not Plastic FZE"
  },
  {
    tempId: 6,
    testimonial: "The best experience ever!! Thank you so much RelocateME for the extraordinary efforts and great work. You are the best guys!! Special thanks to Ceara and Edgar for the professional support and superior on-time deliverables.",
    by: "Mahmoud Mohamed, Private Family Relocating"
  },
  {
    tempId: 7,
    testimonial: "I used RelocateMe to prepare my move from Morocco to UAE with my Family. It was a fantastic turnkey service: from my business setup in UAE until housing, kids school research. Thanks to RelocateMe, what would otherwise have been a complete nightmare was stress-free.",
    by: "Mohamed Didouch, Private Family Relocating"
  },
  {
    tempId: 8,
    testimonial: "Excellent company and support during our relocation to Dubai. Victoria is extremely helpful and knowledgeable about all local businesses and customs which was really a big help for us coming here. They made the transition much easier and getting settled smoother.",
    by: "Corporate Client, Employee Relocating"
  },
  {
    tempId: 9,
    testimonial: "The moving experience in Dubai has been extremely smooth thanks to RelocateMe. From finding the property, expert advice, to liaising with the landlord; this company are the 360 experts! Even after the move, they consistently go above and beyond their contracted work.",
    by: "Chris Millard, Corporate Client"
  },
  {
    tempId: 10,
    testimonial: "Excellent company and support during our relocation to Dubai. Victoria is extremely helpful and knowledgeable about all local businesses and customs which was really a big help for us coming here. We can only recommend her services!",
    by: "Uli Terheggen, Private Family Relocating"
  },
  {
    tempId: 11,
    testimonial: "Very professional service. Relocate me did an awesome job helping me settle. If you're new in the country, have no idea where to live and how to proceed, I definitely recommend you get in touch with Relocate me to ease the process and ensure a smooth move.",
    by: "Roger S, Corporate Client"
  },
  {
    tempId: 12,
    testimonial: "Did their outmost and beyond to get me going. Highly recommended for a hassle-free House hunting and settlement.",
    by: "Hakim Bounes, Corporate Client"
  },
  {
    tempId: 13,
    testimonial: "The moving experience to Dubai has been great in every aspect. The services include the entire movement process, from goods transfer, property finding based on your criteria, landlord negotiations, to contract overview and setting up of all utilities. The company offers a 100% personalized service.",
    by: "Alvaro de Barutell Allende, Corporate Client"
  },
  {
    tempId: 14,
    testimonial: "RelocateMe made everything super easy for our relocation to UAE. They support you throughout the entire process and their team is highly responsive and very professional. Thank you Ceara!",
    by: "Ahmed Shafei, Corporate Client"
  },
  {
    tempId: 15,
    testimonial: "Amazing service, Victoria was very helpful with all the process relocating with family from the UK.",
    by: "Christos Tzivinikos, Corporate Client"
  },
  {
    tempId: 16,
    testimonial: "Victoria and Teresa helped my family with our relocation to Dubai from the UK in 2014. Given that we are a family of 5, with children aged 9, 8 and 3 and only had 2 months to move this was a pretty major undertaking. Throughout a stressful period, they were a saving grace in terms of calmness, professionalism and sheer 'leave it with me-ness'.",
    by: "Marcus Gent, Managing Director",
    imgSrc: "/images/fpi_logo.png",
    isLogo: true
  },
  {
    tempId: 17,
    testimonial: "Dubai Airports Human Resources has successfully been using RelocateMe services for some time. RelocateMe provide a professional yet personable service and our employees that have relocated from abroad have always been complimentary about their service. The companie's flexibility and willingness to meet Dubai Airport's last-minute requests is always appreciated.",
    by: "Dubai Airports Human Resources",
    imgSrc: "/images/dubai_airports_logo.svg",
    isLogo: true,
    isSvg: true
  },
  {
    tempId: 18,
    testimonial: "RelocateMe manage the entirety of L'Oréal's relocation and tenancy management needs, supporting our employees moving into the UAE and within the region. Since we started using the services of RelocateMe, they have consistently delivered seamless results. The team always succeed in maintaining an exceptional level of service, from start to finish.",
    by: "Jean-Dominique De Ravignan, HR Director, L'Oréal Middle East",
    imgSrc: "/images/loreal_logo.png",
    isLogo: true
  },
  {
    tempId: 19,
    testimonial: "I would also like to express my gratitude to Asim for his professional assistance in the property search. Asim prepared and organized the property viewing very well, addressed all my questions and requirements. Furthermore, Asim helped me to significantly reduce the price for the apartment I liked and negotiated discount on my behalf. Until now Asim is supporting me in communicating to the property owner which is extremely helpful. Thank you very much for your professionalism!",
    by: "Assignee moving from Ukraine to Riyadh, Saudi Arabia"
  },
  {
    tempId: 20,
    testimonial: "I wanted to thank you for your support in finding an apartment. I'd also like to take a moment to share some feedback on our experience with Soumeya as she was great! She took us to all the places we wanted to see, and she was very flexible in adjusting the viewings on the spot based on our feedback. Her attitude was very friendly and helpful, which made the whole experience smooth and enjoyable.",
    by: "Assignee moving from Dubai to Saudi Arabia"
  },
  {
    tempId: 21,
    testimonial: "I want to appreciate you and your team's efforts to help me secure this apartment. I would also like to provide feedback on Asim especially. He was an excellent in every way, from the house search appointment till even after we secured the deal. His knowledge, communication skills and just general empathy really helped me understand the market and make the right choice for housing. He was very kind and understanding towards my family structure, and his advice and suggestions were most appreciated. Thank you once again for the lovely experience!",
    by: "Assignee moving from Egypt to KSA"
  },
  {
    tempId: 22,
    testimonial: "Dominic, I wanted to share how grateful I am for the support I received from you and your team. They were instrumental in helping me find an apartment, which made the whole process so much easier. In particular, I would like to thank Fouzan, who was extremely helpful and an absolute pleasure to work with. His professionalism, kindness, and dedication truly stood out and made the experience stress-free. I also want to thank you for always checking in and make sure everything is going smoothly. I sincerely appreciate all the help and would happily recommend to anyone in need of their services.",
    by: "Assignee moving from Egypt to KSA"
  },
  {
    tempId: 23,
    testimonial: "The service has been excellent, and I truly appreciate the effort put into organizing the school tours. A special thanks to Ms. Sumeya for her kind assistance and help throughout the process — it really made a difference.",
    by: "Assignee moving from Jordan to Riyadh, KSA"
  },
  {
    tempId: 24,
    testimonial: "A special thanks to Sumeya, who lead us on field. She was extremely helpful throughout the entire house-hunting process in Riyadh. She took the time to understand our preferences and needs, and made sure to show us only those properties that matched our criteria. Her responsiveness, patience, and professionalism made the entire experience smooth and stress-free. We truly appreciate her support and would highly recommend her services to anyone looking for a home in Riyadh.",
    by: "Assignee moving from India to KSA"
  },
  {
    tempId: 25,
    testimonial: "Dominic, thank you, to both you and Asim, for your help and support throughout the search. It was a productive process ending with finding the apartment in reference. Really appreciate it!",
    by: "Assignee moving from UK to Saudi Arabia"
  },
  {
    tempId: 26,
    testimonial: "First of all, I would like to thank you for your support during the past six months covering both the school and house search. And I would like to confirm that both services were provided with utmost professionalism.",
    by: "Assignee moving from Lebanon to Riyadh, KSA"
  },
  {
    tempId: 27,
    testimonial: "I wanted to extend my sincere thanks for the exceptional support you provided during my relocation to Saudi Arabia.",
    by: "Assignee moving from Egypt to Riyadh, KSA"
  },
  {
    tempId: 28,
    testimonial: "From the moment I began this journey, you were with me every step of the way - guiding me through the Riyadh rental market, showing me suitable homes, and even helping negotiate a favorable agreement with the landlord. Your local knowledge and professionalism made the entire experience smooth and far less daunting.",
    by: "Assignee moving from India to Riyadh, KSA"
  },
  {
    tempId: 29,
    testimonial: "It was amazing! The consultant (Mr Ahmed) was incredible and an asset to your team. The whole day was perfectly executed and the order of the locations planned was carefully thought through (for example doing horse riding last so it would be cooler and comfortable). I want to sincerely thank you Arshiya and your team for the ongoing support. Please pass my special thanks to Ahmed!",
    by: "Senior executive relocating from Bristol, UK to Taif, Saudi Arabia"
  },
  {
    tempId: 30,
    testimonial: "Thanks so much Arshi - Laila was fantastic and you organizing the day was super - very productive indeed.",
    by: "Senior partner relocating from Singapore to Riyadh, Saudi Arabia"
  },
  {
    tempId: 31,
    testimonial: "Arshiya, thank you for your note and support. It was a pleasure working with you and Fouzan. Happy to inform you that I signed up for an accommodation yesterday. I would like to thank Fouzan for his support. His help led to the success of my search.",
    by: "Senior director relocating from London to Riyadh, Saudi Arabia"
  },
  {
    tempId: 32,
    testimonial: "Thank you very much for your support over the last weeks and for offering the apartment inspection on Saturday. Thank you once again for all your help.",
    by: "Senior executive relocating from Dusseldorf to Doha, Qatar"
  },
  {
    tempId: 33,
    testimonial: "Hello Arshiya, first of all, thank you again for your and the team's help in July. It was very helpful! Everyone has been so kind. Thank you thank you thank you!!!",
    by: "Assignee relocating from Paris to Riyadh"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[hsl(var(--brand))] text-white border-[hsl(var(--brand))]"
          : "z-0 bg-card text-card-foreground border-border hover:border-[hsl(var(--brand))]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      {testimonial.imgSrc ? (
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className={cn(
            "mb-4 object-cover object-top transition-all duration-500",
            (testimonial as any).isLogo ? "h-8 w-auto" : "h-14 w-12 bg-muted",
            // SVG logos (Dubai Airports): normal colors when unselected, white when selected
            (testimonial as any).isLogo && !isCenter && (testimonial as any).isSvg ? "" : "",
            (testimonial as any).isLogo && isCenter && (testimonial as any).isSvg ? "brightness-0 invert" : "",
            // PNG logos (L'Oreal, FPI): normal colors when unselected, white when selected
            (testimonial as any).isLogo && !isCenter && !(testimonial as any).isSvg ? "" : "",
            (testimonial as any).isLogo && isCenter && !(testimonial as any).isSvg ? "brightness-0 invert" : ""
          )}
          style={(testimonial as any).isLogo ? {} : {
            boxShadow: "3px 3px 0px hsl(var(--background))"
          }}
        />
      ) : (
        <div
          className={cn(
            "mb-4 rounded-full flex items-center justify-center font-semibold transition-all duration-500",
            "h-12 w-12",
            isCenter
              ? "bg-white text-[hsl(var(--brand))]"
              : "bg-[hsl(var(--brand))] text-white"
          )}
          style={{
            boxShadow: "3px 3px 0px hsl(var(--background))"
          }}
        >
          {testimonial.by.split(' ').slice(0, 2).map(name => name[0]).join('').toUpperCase()}
        </div>
      )}
      <h3 className={cn(
        "text-sm sm:text-base font-medium",
        isCenter ? "text-white" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 420 : 420);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
          Trusted by <span className="text-[hsl(var(--brand))]">leading organisations</span> across the Middle East for seamless global mobility and relocation services.
        </h2>
      </div>
      <div
        className="relative w-full overflow-hidden bg-muted/30"
        style={{ height: 600 }}
      >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-[hsl(var(--brand))] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-[hsl(var(--brand))] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
      </div>
    </div>
  );
};