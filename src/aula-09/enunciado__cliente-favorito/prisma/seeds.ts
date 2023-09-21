import prisma from "../src/database";


async function checkOrCreateDefaultClient() {
    return await prisma.customer.upsert({
        create: {
            client: "Geraldo Luiz Datena",
            document: "133.245.497-60"
        }, update: {},
        where: {
            document: "133.245.497-60"
        }
    })
}

async function main() {
    return checkOrCreateDefaultClient();
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
})
