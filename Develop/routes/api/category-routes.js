const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    } res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const locationData = await Category.create({
      product_id: req.body.product_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', (req, res) => {
//   Category.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((category) => {
//       return categoryTag.findAll({ where: { category_id: req.params.id } });
//     })
//     .then((categoryTags) => {
//       const categoryTagIds = categoryTags.map(({ tag_id }) => tag_id);
//       const newCategoryTags = req.body.tagIds
//         .filter((tag_id) => !categoryTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             category_id: req.params.id,
//             tag_id,
//           };
//         });
//       const categoryTagsToRemove = categoryTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);
//       return Promise.all([
//         CategoryTag.destroy({ where: { id: categoryTagsToRemove } }),
//         CategoryTag.bulkCreate(newCategoryTags),
//       ]);
//     })
//     .then((updatedCategoryTags) => res.json(updatedCategoryTags))
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    } res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
