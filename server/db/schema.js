import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  index,
  integer,
  decimal,
} from "drizzle-orm/pg-core";

// Providers table
export const providers = pgTable("providers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  location: varchar("location", { length: 100 }).notNull(),
  serviceType: varchar("serve_type", { length: 100 }).notNull(),
  experience: varchar("experience", { length: 50 }).notNull(),
  description: text("description").notNull(),
  facebookLink: varchar("facebook_link", { length: 255 }),
  instagramLink: varchar("instagram_link", { length: 255 }),
  twitterLink: varchar("twitter_link", { length: 255 }),
  whatsappNumber: varchar("whatsapp_number", { length: 20 }),
  rating: decimal("rating", { precision: 3, scale: 1 }).default("0.0"),
  reviewCount: integer("review_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Provider images table
export const providerImages = pgTable(
  "provider_images",
  {
    id: serial("id").primaryKey(),
    providerId: integer("provider_id")
      .references(() => providers.id, { onDelete: "cascade" })
      .notNull(),
    imagePath: varchar("image_path", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      providerIdIdx: index("idx_provider_id").on(table.providerId),
    };
  }
);

// Reviews table
export const reviews = pgTable(
  "reviews",
  {
    id: serial("id").primaryKey(),
    providerId: integer("provider_id")
      .references(() => providers.id, { onDelete: "cascade" })
      .notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    rating: integer("rating").notNull(),
    comment: text("comment").notNull(),
    date: timestamp("date").defaultNow(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      providerIdIdx: index("idx_review_provider_id").on(table.providerId),
    };
  }
);
