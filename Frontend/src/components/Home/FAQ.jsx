/* eslint-disable react/no-unescaped-entities */
const FAQ = () => {
  return (
    <div className="p-4">
      <div className="text-customTextBlack font-bold text-2xl p-4 text-center">
        FAQ
      </div>
      <div className="p-4 space-y-4 m-4">
        <div className="collapse collapse-arrow bg-customTextBlack">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl text-white font-bold">
            Is AutiLearn suitable for all children with autism?
          </div>
          <div className="collapse-content text-white text-lg">
            AutiLearn is a personalized learning platform designed to cater to
            the diverse needs of children with autism. By harnessing the power
            of AI, we transform complex information into engaging and accessible
            content, empowering young learners to thrive.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-customTextBlack">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-white font-bold">
            Can parents monitor their child's progress?
          </div>
          <div className="collapse-content text-white text-lg">
            Parents are active partners in their child's learning journey with
            AutiLearn. We provide detailed progress reports, including completed
            quizzes, earned badges, and mastered learning paths. This empowers
            parents to track their child's development and celebrate their
            achievements.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-customTextBlack">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-white font-bold">
            Can parents control what their kids learn?
          </div>
          <div className="collapse-content text-white text-lg">
            Currently in our Alpha version, we are having learning paths in
            biology and physics. In our upcoming beta version, parents will have
            the flexibility to select specific textbooks and content for their
            child's learning journey. Our AI will then create personalized
            learning paths and quizzes based on the chosen materials. This
            ensures that the content aligns perfectly with the child's
            individual needs and parental preferences.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-customTextBlack">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-white font-bold">
            What’s next for AutiLearn?
          </div>
          <div className="collapse-content text-white text-lg">
            AutiLearn is constantly evolving to better serve children with
            autism. We're excited to announce the upcoming launch of
            personalized micro-podcasts! Utilizing cutting-edge technology,
            we'll create audio content tailored to each child's interests, using
            a voice familiar to them - their parent's. By combining engaging
            storytelling with essential learning content, these micro-podcasts
            will offer a new dimension to the AutiLearn experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
