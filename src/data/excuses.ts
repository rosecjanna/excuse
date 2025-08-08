export interface ExcuseCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface ExcuseTemplate {
  category: string;
  templates: string[];
}

export const categories: ExcuseCategory[] = [
  { id: 'work', name: 'Work', icon: '💼', color: 'from-blue-500 to-blue-600' },
  { id: 'school', name: 'School', icon: '📚', color: 'from-green-500 to-green-600' },
  { id: 'social', name: 'Social Events', icon: '🎉', color: 'from-purple-500 to-purple-600' },
  { id: 'appointments', name: 'Appointments', icon: '⏰', color: 'from-red-500 to-red-600' },
  { id: 'chores', name: 'Chores', icon: '🏠', color: 'from-yellow-500 to-yellow-600' },
  { id: 'exercise', name: 'Exercise', icon: '💪', color: 'from-orange-500 to-orange-600' },
];

export const excuseTemplates: ExcuseTemplate[] = [
  {
    category: 'work',
    templates: [
      "My cat accidentally unplugged my router during a crucial {meeting/presentation/deadline}.",
      "I'm experiencing an unexpected {family emergency/medical situation/car breakdown} that requires immediate attention.",
      "My {computer/laptop/software} crashed and I lost all my work, need time to recover the files.",
      "There's a {gas leak/water pipe burst/electrical issue} at my {apartment/house} that needs urgent repair.",
      "I'm stuck in an elevator at {the doctor's office/parking garage/mall} and rescue teams are on the way.",
      "My {child/pet/elderly parent} had an emergency situation that I need to handle personally.",
      "I'm dealing with severe {food poisoning/migraine/allergic reaction} from {last night's dinner/new medication}.",
      "My {babysitter/dog walker/housekeeper} didn't show up and I have no alternative arrangements.",
      "I'm having a severe {anxiety attack/panic episode} and need to take a mental health day.",
      "There's been a {break-in/fire alarm/security incident} at my {building/neighborhood} and I can't leave."
    ]
  },
  {
    category: 'school',
    templates: [
      "My {laptop/tablet/printer} died right before I was about to submit my {assignment/project/essay}.",
      "I've been dealing with a severe case of {flu/strep throat/stomach bug} and couldn't focus on studying.",
      "There was a {family emergency/medical crisis/unexpected situation} that required my immediate attention.",
      "My {internet/power/heating} went out for {three days/the whole weekend/most of this week} due to the storm.",
      "I accidentally saved my {project/essay/homework} in the wrong format and can't open it now.",
      "My {car broke down/public transport was cancelled/ride fell through} and I couldn't get to {class/the exam/school}.",
      "I've been {caring for a sick family member/dealing with a housing crisis/managing a personal emergency}.",
      "My {computer/hard drive/cloud storage} corrupted all my files and I lost {weeks/months} of work.",
      "I had a severe {allergic reaction/medical episode/injury} that landed me in the {hospital/urgent care}.",
      "There's been a {water damage/pest infestation/safety hazard} issue at my {dorm/apartment/house}."
    ]
  },
  {
    category: 'social',
    templates: [
      "I'm feeling really {overwhelmed/anxious/drained} today and need some time to {recharge/decompress/practice self-care}.",
      "My {car/ride/transportation} fell through at the last minute and I have no way to get there.",
      "I woke up with a terrible {headache/stomachache/cold} and don't want to risk getting anyone else sick.",
      "I have an unexpected {work deadline/family obligation/emergency situation} that I need to handle tonight.",
      "I'm dealing with some {personal issues/family drama/mental health challenges} and need to stay in tonight.",
      "My {pet/child/roommate} is having an emergency and I need to {take them to the vet/babysit/help them out}.",
      "I completely forgot about a {prior commitment/family dinner/important appointment} that I can't reschedule.",
      "I'm experiencing severe {social anxiety/panic attacks/depression} and don't feel safe driving right now.",
      "There's a {weather emergency/security issue/safety concern} in my area and I've been advised to stay indoors.",
      "I just realized I'm {coming down with something/having an allergic reaction/feeling really unwell}."
    ]
  },
  {
    category: 'appointments',
    templates: [
      "I'm stuck in {traffic/an emergency situation/a work crisis} and won't be able to make it on time.",
      "My {car/transportation/ride} broke down unexpectedly and I have no alternative way to get there.",
      "I've developed a sudden {illness/allergic reaction/medical issue} and need to reschedule for safety reasons.",
      "There's been a {family emergency/personal crisis/urgent situation} that requires my immediate attention.",
      "I received an {urgent work call/emergency notification/critical message} that I must handle right now.",
      "My {childcare/pet care/elder care} arrangement fell through and I can't leave them unattended.",
      "I'm experiencing severe {anxiety/panic attacks/stress} about {the procedure/appointment/meeting} and need more time to prepare.",
      "There's been a {power outage/gas leak/security issue} at my {home/building/area} and I can't leave safely.",
      "I accidentally {double-booked/scheduled wrong/mixed up dates} and have a conflicting {commitment/appointment/obligation}.",
      "I'm dealing with a {medication side effect/food poisoning/severe headache} that makes it unsafe to {drive/travel/attend}."
    ]
  },
  {
    category: 'chores',
    templates: [
      "I injured my {back/knee/shoulder} and {lifting/bending/reaching} is too painful right now.",
      "The {washing machine/vacuum/cleaning supplies} broke and I need to {get it fixed/buy new ones/find alternatives}.",
      "I've been working {overtime/extra shifts/long hours} all week and I'm physically and mentally exhausted.",
      "I'm dealing with a {family crisis/personal emergency/health issue} that's taking up all my time and energy.",
      "The {weather/storm/conditions} made it impossible to {go shopping/do outdoor chores/complete tasks safely}.",
      "I had an {allergic reaction/asthma attack/medical episode} from {dust/cleaning products/allergens} last time I tried.",
      "My {schedule/routine/plans} got completely disrupted by {work demands/family needs/unexpected events}.",
      "I'm {saving money/between paychecks/dealing with unexpected expenses} and can't afford {supplies/services/equipment} right now.",
      "I've been {feeling overwhelmed/struggling with depression/having anxiety issues} and need to prioritize {self-care/mental health/basic needs}.",
      "There's a {pest problem/maintenance issue/safety concern} that needs to be resolved before I can {clean/organize/complete chores}."
    ]
  },
  {
    category: 'exercise',
    templates: [
      "I pulled a {muscle/tendon/ligament} in my {leg/back/arm} and need to rest it for a few days.",
      "I'm feeling {dizzy/nauseous/lightheaded} today and don't think it's safe to {work out/be active/exercise}.",
      "I've been {overtraining/pushing too hard/not getting enough sleep} and my body needs a recovery day.",
      "I have a {doctor's appointment/medical test/health consultation} that conflicts with my usual {workout time/gym schedule}.",
      "I'm dealing with {work stress/family issues/personal problems} and can't focus on {exercise/fitness/physical activity} right now.",
      "I {forgot my gear/don't have clean clothes/left my equipment at home} and can't work out without proper {attire/tools}.",
      "I'm fighting off a {cold/virus/bug} and don't want to {worsen it/spread germs/compromise my immune system}.",
      "I had a really {intense workout/challenging day/exhausting week} yesterday and my body is still {recovering/sore/fatigued}.",
      "The {weather/air quality/conditions} are too {extreme/dangerous/unhealthy} for {outdoor exercise/running/activities}.",
      "I'm {starting a new medication/adjusting to treatment/dealing with side effects} that affects my {energy/balance/ability to exercise}."
    ]
  },
];

const variables = {
  'meeting/presentation/deadline': ['meeting', 'presentation', 'deadline', 'conference call', 'client review'],
  'family emergency/medical situation/car breakdown': ['family emergency', 'medical situation', 'car breakdown', 'home emergency', 'unexpected crisis'],
  'computer/laptop/software': ['computer', 'laptop', 'software', 'system', 'technology'],
  'apartment/house': ['apartment', 'house', 'place', 'home', 'residence'],
  'child/pet/elderly parent': ['child', 'pet', 'elderly parent', 'family member', 'dependent'],
  'food poisoning/migraine/allergic reaction': ['food poisoning', 'migraine', 'allergic reaction', 'stomach flu', 'severe headache'],
  'last night\'s dinner/new medication': ['last night\'s dinner', 'new medication', 'something I ate', 'a new supplement'],
  'babysitter/dog walker/housekeeper': ['babysitter', 'dog walker', 'housekeeper', 'caregiver', 'helper'],
  'anxiety attack/panic episode': ['anxiety attack', 'panic episode', 'mental health crisis', 'emotional breakdown'],
  'break-in/fire alarm/security incident': ['break-in', 'fire alarm', 'security incident', 'emergency situation', 'safety concern'],
  'building/neighborhood': ['building', 'neighborhood', 'area', 'complex', 'street']
};

interface UserInputs {
  name: string;
  location: string;
  date: string;
  customDetail: string;
}

export function generateExcuse(categoryId: string, userInputs?: UserInputs): string {
  const categoryExcuses = excuseTemplates.find(t => t.category === categoryId);
  if (!categoryExcuses) return "I need more time to come up with a good excuse!";
  
  const template = categoryExcuses.templates[Math.floor(Math.random() * categoryExcuses.templates.length)];
  
  let excuse = template;
  
  // Replace variables with random options
  Object.entries(variables).forEach(([key, options]) => {
    const regex = new RegExp(`{${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}}`, 'g');
    excuse = excuse.replace(regex, options[Math.floor(Math.random() * options.length)]);
  });
  
  // Apply user customizations if provided
  if (userInputs) {
    if (userInputs.name) {
      excuse = excuse.replace(/\bI\b/g, userInputs.name);
      excuse = excuse.replace(/\bmy\b/gi, `${userInputs.name}'s`);
    }
    
    if (userInputs.location) {
      // Replace common location references
      excuse = excuse.replace(/\b(at home|at my place|at the office|downtown|at the mall)\b/gi, `at ${userInputs.location}`);
    }
    
    if (userInputs.date) {
      // Replace time references
      excuse = excuse.replace(/\b(today|tomorrow|this morning|tonight|right now)\b/gi, userInputs.date);
    }
    
    if (userInputs.customDetail) {
      // Replace the first generic activity with custom detail
      excuse = excuse.replace(/\b(meeting|appointment|situation|emergency|issue)\b/i, userInputs.customDetail);
    }
  }
  
  return excuse;
}