/** GENERIC UTILITIES */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

/** PARTIAL */
function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  //* use 'Partial' so that TS allows initiation w/o it being complete
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  //* by the time the type is complete so we can return it
  return courseGoal as CourseGoal;
}

createCourseGoal('Job Search', 'Get me a job', new Date());

/** READ ONLY */
const names: Readonly<string[]> = ['Donny', 'Jacob'];
// names.push('Lana'); // TS will flag if we try to mode it

console.log(names);

export {}; //! Remove this line when compiling. Purpose is to not interfere w/ other TS files that have the same variables.
