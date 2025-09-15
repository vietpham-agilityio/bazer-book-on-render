// // ./src/bootstrap.ts

// export default async ({ strapi }) => {
//   const existingBooks = await strapi.entityService.count("api::book.book");
//   strapi.log.info(`📊 Found ${existingBooks} existing books`);

//   if (existingBooks < 500) {
//     const images = await strapi.db.query("plugin::upload.file").findMany({
//       where: { mime: { $contains: "image" } },
//     });

//     strapi.log.info(`🖼️ Found ${images.length} images in Media Library`);

//     if (!images || images.length === 0) {
//       strapi.log.warn("⚠️ No images found in Media Library. Creating books without cover images.");
//     }

//     const booksToCreate = Array.from(
//       { length: 500 - existingBooks },
//       (_, i) => {
//         const randomImage = images && images.length > 0 
//           ? images[Math.floor(Math.random() * images.length)]
//           : null;

//         return {
//           title: `Seed Book ${i + 1}`,
//           description: `This is the description for Seed Book ${i + 1}`,
//           ...(randomImage && { coverImage: randomImage.id }),
//           price: parseFloat((Math.random() * 90 + 10).toFixed(2)),
//           rating: Math.floor(Math.random() * 5) + 1,
//           reviews: Math.floor(Math.random() * 5000),
//         };
//       }
//     );

//     for (const book of booksToCreate) {
//       await strapi.entityService.create("api::book.book", { data: book });
//     }

//     strapi.log.info(`✅ Seeded ${booksToCreate.length} books.`);
//   } else {
//     strapi.log.info("✅ Books already exist, skipping seeding.");
//   }
// };
