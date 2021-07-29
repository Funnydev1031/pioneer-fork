import { ForumCategoryFieldsFragment } from '@/forum/queries/__generated__/forum.generated'

export interface ForumCategory extends ForumSubCategory {
  description: string
  subcategories: ForumSubCategory[]
}

interface ForumSubCategory {
  id: string
  title: string
}

export const asForumCategory = (fields: ForumCategoryFieldsFragment): ForumCategory => ({
  id: fields.id,
  title: fields.title,
  description: fields.description,
  subcategories: [],
})
