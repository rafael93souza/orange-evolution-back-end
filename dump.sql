CREATE DATABASE
    orange_evolution
WITH
    OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT = -1 IS_TEMPLATE = False;

-- CreateTable

CREATE TABLE
    "users" (
        "id" SERIAL NOT NULL,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        CONSTRAINT "users_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "trails" (
        "id" SERIAL NOT NULL,
        "nameTrail" TEXT NOT NULL,
        "escolhaId" INTEGER,
        CONSTRAINT "trails_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "full_stack" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "author" TEXT NOT NULL,
        "duration" TEXT,
        "url" TEXT NOT NULL,
        "trailId" INTEGER,
        CONSTRAINT "full_stack_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "ux_ui_designer" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "author" TEXT NOT NULL,
        "duration" TEXT,
        "url" TEXT NOT NULL,
        "trailId" INTEGER,
        CONSTRAINT "ux_ui_designer_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "qa" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "author" TEXT NOT NULL,
        "duration" TEXT,
        "url" TEXT NOT NULL,
        "trailId" INTEGER,
        CONSTRAINT "qa_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "start" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "author" TEXT NOT NULL,
        "duration" TEXT,
        "url" TEXT NOT NULL,
        CONSTRAINT "start_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "selection" (
        "id" SERIAL NOT NULL,
        "userId" INTEGER,
        CONSTRAINT "selection_pkey" PRIMARY KEY ("id")
    );

-- CreateTable

CREATE TABLE
    "status" (
        "id" SERIAL NOT NULL,
        "status" TEXT NOT NULL,
        "trailId" INTEGER,
        "aula" INTEGER,
        "inicioId" INTEGER,
        "userId" INTEGER NOT NULL,
        CONSTRAINT "status_pkey" PRIMARY KEY ("id")
    );

-- CreateIndex

CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey

ALTER TABLE "trails"
ADD
    CONSTRAINT "trails_escolhaId_fkey" FOREIGN KEY ("escolhaId") REFERENCES "selection"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "full_stack"
ADD
    CONSTRAINT "full_stack_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trails"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "ux_ui_designer"
ADD
    CONSTRAINT "ux_ui_designer_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trails"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "qa"
ADD
    CONSTRAINT "qa_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trails"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "selection"
ADD
    CONSTRAINT "selection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "status"
ADD
    CONSTRAINT "status_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trails"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "status"
ADD
    CONSTRAINT "status_inicioId_fkey" FOREIGN KEY ("inicioId") REFERENCES "start"("id") ON DELETE
SET NULL ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE "status"
ADD
    CONSTRAINT "status_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;